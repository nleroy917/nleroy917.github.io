#import "/lib/web.typ": *

#show: page.with(title: "Hello, Typst - Nathan LeRoy")

#header("Hello, Typst", subtitle: "February 11th, 2025")

I rebuilt my personal site using Typst's new HTML export feature.

== Why Typst?

I've had my eye on Typst for some time now. It markets itself as the modern latex replacement, and it has a freight train of momentum behind it. I've slowly been dipping my toes into the ecosystem for awhile now, and gave it the first real test by writing my #link("https://github.com/nleroy917/dissertation")[PhD dissertation] using typst markup.

I've had a long journey with web frameworks. My first personal site was plain HTML/CSS. After learning React in 2020, I soon moved to #link("https://github.com/facebook/create-react-app")[create-react-app] -- a now defunct system (RIP). I hopped on the #link("https://www.gatsbyjs.com/")[Gatsby] train (also RIP) after a bit, and eventually landed safely at home with Next.js and it's state-site export functionality.

I've been a Next.js merchant for years now, and it's kept me comfortable. However, I've still yearned for a new system over the years. I ever-so-briefly dabbled in #link("https://svelte.dev/")[Svelte] and #link("https://astro.build/")[Astro] (which I hear is amazing), but never really could commit. After ~3 years of maintenance, endless component tweaking, and custom styling I grew tired of my personal site; truly I just wanted something simpler.

Typst had my attention because:

- It's fast — compiles in milliseconds
- The syntax is clean and readable
- Math typesetting is built-in: $integral_0^infinity e^(-x^2) d x = sqrt(pi)/2$
- The new #link("https://github.com/typst/typst/issues/721")[HTML export] means I can use it for the web

The latter reason was the most important. While experimental, its something I've had my eye on for awhile while recognizing the real potential. I semi vibe-coded a micro-build system to recurse my content and export assets into HTML which I could host on GitHub pages. It worked way better than expected.

#note[
  Typst's HTML export is still experimental, but it's good enough for a personal site. The output is semantic HTML that's easy to style with CSS.
]

== The Build System

The build system is a small Rust program that:

1. Finds all `.typ` files in `content/`
2. Runs `typst compile --features html --format html` on each
3. Injects a CSS link into the generated HTML
4. Copies static assets to the output directory

That's really it. No bundlers or frameworks.

== What's Next

The build system is crude and simply calls subprocesses. A more robust solution would actually pull in the #link("https://crates.io/crates/typst")[Typst crate] and provide better error-handling, real-time updates, etc.

As I type this, I suppose I've reached the logical conclusion: *the web developer grows tired of web frameworks that don't quite fill all of his/her needs, so he/she simply writes their own.*