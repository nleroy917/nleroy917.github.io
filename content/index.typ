#import "/lib/web.typ": *

#show: page.with(title: "Nathan LeRoy")

#header("Nathan LeRoy", subtitle: "DevRel @ Qdrant")

ML engineer. Researcher. Writer. Building tools that make AI accessible.

== Recent Posts

#html.elem("ul", attrs: (class: "post-list"))[
  // #post-entry("Feb 2025", "Unplugging from the AI matrix", "/blog/ai.html")
  #post-entry("Feb 2025", "Hello, Typst", "/blog/hello-typst.html")
]

== Projects
- #link("https://github.com/databio/gtars")[gtars: high-performance genomic interval analysis in Rust]
- #link("/bm25viz")[BM25viz: interactive visualization of BM25 ranking scores]
- #link("/spladeviz")[SPLADEviz: interactive visualization of SPLADE ranking scores]


== Links

- #link("https://github.com/nleroy917")[GitHub]
- #link("https://twitter.com/nathanjleroy")[Twitter]