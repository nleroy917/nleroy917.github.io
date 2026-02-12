use clap::{CommandFactory, Parser, Subcommand, arg};
use notify::{RecursiveMode, Watcher};
use std::fs;
use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};
use std::path::{Path, PathBuf};
use std::sync::mpsc::channel;
use std::thread;
use std::time::Duration;
use walkdir::WalkDir;

use typsy::render::ContentRenderer;

const HEAD_INJECT: &str = r#"
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/style.css">
<link rel="icon" href="/favicon.ico">
"#;

#[derive(Parser)]
#[command(name = "ssg")]
#[command(version, about = "Minimal static site generator for Typst -> HTML")]
struct Cli {
    #[command(subcommand)]
    command: Option<Commands>,
}

#[derive(Subcommand)]
enum Commands {
    /// Builds the static site into the `out/` directory.
    Build {
        /// Root directory of the project (defaults to current directory)
        #[arg(short, long)]
        root: Option<PathBuf>,
    },
    /// Starts a local development server with live reloading.
    /// Watches for changes in `content/`, `static/`, and `lib/` directories.
    /// Serves the site at http://localhost:3000 by default.
    /// Use Ctrl+C to stop the server.
    Dev {
        /// Port for local server (defaults to 3000)
        #[arg(short, long, default_value = "3000")]
        port: u16,
    },
}

fn main() {
    let cli = Cli::parse();
    let root = find_root();

    let command = cli.command;
    
    match command {
        Some(Commands::Build { root: cmd_root }) => {
            let root = cmd_root.unwrap_or(root);
            build(&root);
        }
        Some(Commands::Dev { port }) => {
            dev(&root, port);
        }
        None => {
            // print help
            Cli::command().print_help().unwrap();
        }
    }
}

fn find_root() -> PathBuf {
    // Walk up to find the directory containing content/
    let mut dir = std::env::current_dir().unwrap();
    loop {
        if dir.join("content").exists() {
            return dir;
        }
        if !dir.pop() {
            // Fallback to current directory
            return std::env::current_dir().unwrap();
        }
    }
}

fn build(root: &Path) {
    println!("Building site...");

    let content_dir = root.join("content");
    let static_dir = root.join("static");
    let out_dir = root.join("out");

    // Clean output directory
    if out_dir.exists() {
        fs::remove_dir_all(&out_dir).expect("Failed to clean out/");
    }
    fs::create_dir_all(&out_dir).expect("Failed to create out/");

    // Copy static files
    if static_dir.exists() {
        copy_dir_recursive(&static_dir, &out_dir);
        println!("  Copied static files");
    }

    // Find and compile all .typ files
    let typ_files: Vec<PathBuf> = WalkDir::new(&content_dir)
        .into_iter()
        .filter_map(|e| e.ok())
        .filter(|e| e.path().extension().is_some_and(|ext| ext == "typ"))
        .map(|e| e.path().to_path_buf())
        .collect();

    if typ_files.is_empty() {
        println!("  No .typ files found in content/");
        return;
    }

    let mut success = true;
    for typ_file in &typ_files {
        let rel_path = typ_file.strip_prefix(&content_dir).unwrap();

        // Handle _index.typ -> index.html
        let out_path = if rel_path.file_name().unwrap() == "_index.typ" {
            out_dir
                .join(rel_path.parent().unwrap_or(Path::new("")))
                .join("index.html")
        } else {
            out_dir.join(rel_path).with_extension("html")
        };

        println!(
            "  {} -> {}",
            rel_path.display(),
            out_path.strip_prefix(&out_dir).unwrap().display()
        );

        if run_typst(root, typ_file, &out_path) {
            inject_head(&out_path);
        } else {
            success = false;
        }
    }

    if success {
        println!("Done! Output in out/");
    } else {
        println!("Build completed with errors");
        std::process::exit(1);
    }
}

fn run_typst(root: &Path, input: &Path, output: &Path) -> bool {
    // Ensure output directory exists
    if let Some(parent) = output.parent() {
        fs::create_dir_all(parent).ok();
    }

    let input_content = match fs::read_to_string(input) {
        Ok(c) => c,
        Err(e) => {
            eprintln!("  ERROR reading {}: {}", input.display(), e);
            return false;
        }
    };
    let renderer = ContentRenderer::new(root.to_path_buf(), input_content);
    let document = typst::compile(&renderer)
        .output
        .expect("Failed to render document");

    let html = typst_html::html(&document).expect("Error exporting HTML");

    if let Err(e) = fs::write(output, html) {
        eprintln!("  ERROR writing {}: {}", output.display(), e);
        return false;
    }

    true

}

fn inject_head(html_file: &Path) {
    let content = match fs::read_to_string(html_file) {
        Ok(c) => c,
        Err(_) => return,
    };

    let new_content = if content.contains("<head>") {
        content.replacen("<head>", &format!("<head>{}", HEAD_INJECT), 1)
    } else if content.contains("<HEAD>") {
        content.replacen("<HEAD>", &format!("<HEAD>{}", HEAD_INJECT), 1)
    } else {
        format!(
            "<!DOCTYPE html><html lang=\"en\"><head>{}</head><body>{}</body></html>",
            HEAD_INJECT, content
        )
    };

    fs::write(html_file, new_content).ok();
}

fn copy_dir_recursive(src: &Path, dst: &Path) {
    for entry in WalkDir::new(src).into_iter().filter_map(|e| e.ok()) {
        let src_path = entry.path();
        let rel_path = src_path.strip_prefix(src).unwrap();
        let dst_path = dst.join(rel_path);

        if src_path.is_dir() {
            fs::create_dir_all(&dst_path).ok();
        } else {
            if let Some(parent) = dst_path.parent() {
                fs::create_dir_all(parent).ok();
            }
            fs::copy(src_path, &dst_path).ok();
        }
    }
}

fn dev(root: &Path, port: u16) {
    // Initial build
    build(root);

    // Start server in background thread
    let out_dir = root.join("out");
    thread::spawn(move || {
        serve_static(&out_dir, port);
    });

    println!("Serving at http://localhost:{}", port);
    println!("Watching for changes... (Ctrl+C to stop)\n");

    let (tx, rx) = channel();

    let mut watcher = notify::recommended_watcher(move |res: Result<notify::Event, notify::Error>| {
        if res.is_ok() {
            tx.send(()).ok();
        }
    })
    .expect("Failed to create watcher");

    // Watch content, static, and lib directories
    for dir in ["content", "static", "lib"] {
        let path = root.join(dir);
        if path.exists() {
            watcher.watch(&path, RecursiveMode::Recursive).ok();
        }
    }

    // Rebuild on changes
    loop {
        if rx.recv().is_ok() {
            // Debounce
            while rx.recv_timeout(Duration::from_millis(100)).is_ok() {}
            println!("Rebuilding...");
            build(root);
        }
    }
}

fn serve_static(out_dir: &Path, port: u16) {
    let listener = TcpListener::bind(format!("127.0.0.1:{}", port)).expect("Failed to bind port");

    for stream in listener.incoming().flatten() {
        let out_dir = out_dir.to_path_buf();
        thread::spawn(move || handle_request(stream, &out_dir));
    }
}

fn handle_request(mut stream: TcpStream, out_dir: &Path) {
    let mut buffer = [0; 1024];
    if stream.read(&mut buffer).is_err() {
        return;
    }

    let request = String::from_utf8_lossy(&buffer);
    let path = request
        .lines()
        .next()
        .and_then(|line| line.split_whitespace().nth(1))
        .unwrap_or("/");

    // Resolve file path
    let mut file_path = out_dir.join(path.trim_start_matches('/'));
    if file_path.is_dir() {
        file_path = file_path.join("index.html");
    }

    let (status, content_type, body) = if file_path.exists() && file_path.is_file() {
        let body = fs::read(&file_path).unwrap_or_default();
        let content_type = match file_path.extension().and_then(|e| e.to_str()) {
            Some("html") => "text/html",
            Some("css") => "text/css",
            Some("js") => "application/javascript",
            Some("json") => "application/json",
            Some("png") => "image/png",
            Some("jpg") | Some("jpeg") => "image/jpeg",
            Some("svg") => "image/svg+xml",
            Some("ico") => "image/x-icon",
            _ => "application/octet-stream",
        };
        ("200 OK", content_type, body)
    } else {
        ("404 Not Found", "text/plain", b"Not Found".to_vec())
    };

    let response = format!(
        "HTTP/1.1 {}\r\nContent-Type: {}\r\nContent-Length: {}\r\n\r\n",
        status,
        content_type,
        body.len()
    );

    stream.write_all(response.as_bytes()).ok();
    stream.write_all(&body).ok();
}