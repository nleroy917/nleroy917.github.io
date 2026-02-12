// Shared web components for the site

// Navigation bar
#let nav() = {
  html.elem("nav")[
    #link("/")[home]
    #link("/blog/")[blog]
    #link("/about.html")[about]
  ]
}

// Page footer
#let footer() = {
  html.elem("footer")[
    #sym.copyright 2025 Nathan LeRoy
    #h(1em)
    #sym.dot
    #h(1em)
    #link("https://github.com/nleroy917")[github]
    #h(1em)
  ]
}

// Note/callout box
#let note(title: "Note", body) = {
  html.elem("div", attrs: (class: "note"))[
    #html.elem("div", attrs: (class: "note-title"))[#title]
    #body
  ]
}

// Blog post entry for listing pages
#let post-entry(date, title, href) = {
  html.elem("li")[
    #html.elem("span", attrs: (class: "date"))[#date]
    #link(href)[#title]
  ]
}

// Page wrapper - use at the top of each page
#let page(title: none, body) = {
  set document(title: title) if title != none

  nav()

  html.elem("main")[
    #body
  ]

  footer()
}

// Header section with title and optional subtitle
#let header(title, subtitle: none) = {
  html.elem("header")[
    = #title
    #if subtitle != none {
      html.elem("p", attrs: (class: "subtitle"))[#subtitle]
    }
  ]
}