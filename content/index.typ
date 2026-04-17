#import "/lib/web.typ": *

#show: page.with(title: "Nathan LeRoy")

#header("Nathan LeRoy", subtitle: "Research Engineer @ Qdrant")

Building and learning about tools for AI, research, and developer workflows.

== Recent Posts

#html.elem("ul", attrs: (class: "post-list"))[
  #post-entry("March 2026", "The last thing I knew everything about", "/blog/the-last-thing-i-knew-everything-about.html")
  #post-entry("Feb 2026", "Hello, Typst", "/blog/hello-typst.html")
]

== Projects
- #link("https://github.com/databio/gtars")[gtars: high-performance genomic interval analysis in Rust]
- #link("https://github.com/databio/geniml")[Atacformer: a transformer-based embedding model for scATAC-seq data]
- #link("https://github.com/nleroy917/fastembed-bio")[fastembed-bio: fastembed fork that supports biological data]
- #link("https://github.com/nleroy917/optipyzer")[Optipyzer: Multi-species codon optimization]

== Links

- #link("https://github.com/nleroy917")[GitHub]
- #link("https://twitter.com/nathanjleroy")[Twitter]