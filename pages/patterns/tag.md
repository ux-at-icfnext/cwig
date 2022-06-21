---
layout: patterns
permalink: /tag
title:  Tag
description: |
  A tag draws attention to new or categorized content elements.
usa-link: https://designsystem.digital.gov/components/tag/
htmlpath: /patterns/tag/tag-default.md
csspath: # path to ccs file
varspath: # path to variations html file
specification: |
  - Text on the tag should be short. 

  - If the tags aren’t interactive, disable hover, focus, and active styles.

  - Avoid tags if they might appear in the same area of the page as buttons.


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


