---
layout: patterns
permalink: /tag
title:  Tag
description: |
  A tag draws attention to new or categorized content elements.
usa-link: https://designsystem.digital.gov/components/tag/
htmlpath: /patterns/tag/tag.md
csspath: # path to ccs file
varspath: # path to variations html file
specification: |
  When to use the tag component

  - **To draw attention to new, important content.** Tags can focus attention on important content on that might otherwise be missed.

  - **To filter results with one or more tags.**

  - **To indicate the number of new or unread items within a container.** For example, to indicate the number of unread emails within a person’s inbox.

  When to consider something else

  - **Confusion with buttons.** Avoid tags if they might appear in the same area of the page as buttons.

  - **New or updated content.** To call attention to new or updated content, consider changing the background color of the object itself or experiment with changing the font weight.

  - **When users already expect content to be updated frequently.** For example, on a site dedicated to breaking news. In this case placing the new content at the top may be enough.

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


