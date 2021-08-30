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
  Side navigation should be default to have the current page link in **"active"** state to show users which page they have navigated to. If it's a child link or grandchild link, the parent link should be expanded to show the navigational hierarchy. 

  - On click of a parent link, the parent link changes to **"active"** state and expands open to reveal the child links under it. 

  - On click of a child link, the child link changes to **"active"** state and expands open to reveal the grandchild links under it. Parent link will remain **"active"**. 
  
  - On click of a grandchild link, the grandchild link changes to **"active"** state. 

  - On hover, the menu item gets hightlighted. 

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


