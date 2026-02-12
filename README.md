# nathanleroy.io

Personal site built with [Typst](https://typst.app).

## Structure

```
content/     # .typ source files
lib/         # shared components
static/      # css, images
out/         # generated html (gitignored)
ssg/         # rust build tool
```

## Usage

```bash
# build
cargo build --release -p ssg
./ssg/target/release/ssg

# watch mode
./ssg/target/release/ssg --watch

# serve locally
./ssg/target/release/ssg --serve
```

## Deploy

Push to `master` → GitHub Actions builds and deploys to Pages.