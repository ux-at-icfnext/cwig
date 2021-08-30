---
layout: patterns
permalink: /side-navigation
title:  Side Navigation
description: |
  Hierarchical, vertical navigation to place at the side of a page.
usa-link: https://designsystem.digital.gov/components/side-navigation/
htmlpath: /patterns/side-navigation/side-navigation.md
csspath: # path to ccs file
varspath: /patterns/side-navigation/side-navigation-variations.md
specification: |
  **When to use the side navigation component**
  - To display a navigational hierarchy with one to three levels.
  - To display the “sub-navigation” within a section of the website.

  **When to consider something else**
  - **Small site.** If the site has fewer than five pages, consider organizing the page without a navigational hierarchy.
  - **Existing navigation.** If your page already has a horizontal and vertical navigation bar, consider ways to simplify your navigation system.

schema: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-classname
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"


---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


