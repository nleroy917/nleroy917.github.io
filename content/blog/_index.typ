#import "/lib/web.typ": *

#show: page.with(title: "Blog - Nathan LeRoy")

#header("Blog")

Occasional thoughts on software, science, and other things.

#html.elem("ul", attrs: (class: "post-list"))[
  #post-entry("Feb 2025", "Hello, Typst", "/blog/hello-typst.html")
]