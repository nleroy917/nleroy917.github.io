#import "/lib/web.typ": *

#show: page.with(title: "Blog - Nathan LeRoy")

#header("Blog")

Occasional thoughts on software, science, and other things.

#html.elem("ul", attrs: (class: "post-list"))[
  #post-entry("March 2026", "The last thing I knew everything about", "/blog/the-last-thing-i-knew-everything-about.html")
  #post-entry("Feb 2026", "Hello, Typst", "/blog/hello-typst.html")
]