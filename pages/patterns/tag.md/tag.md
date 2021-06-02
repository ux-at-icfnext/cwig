---
layout: patterns
permalink: "/tag"
title:  Tag
htmlpath: "patterns/tag/tag.md"
csspath: "patterns/tag/tag.scss"
description:  A tag draws attention to new or categorized content elements.
usa-link: https://designsystem.digital.gov/components/tag/
specification: 
  When to use the tag component
To draw attention to new, important content. Tags can focus attention on important content on that might otherwise be missed.
To filter results with one or more tags.
To indicate the number of new or unread items within a container. For example, to indicate the number of unread emails within a person’s inbox.
  
schema: 
  - fieldname: heading
    class-name: usa-accordion__heading
    required: true
    type: h4
    content: 80 characters
    example: "First Amendment"
  - fieldname: body
    class-name: usa-accordion__content
    required: true
    type: rich text
    content: 500 characters
    example: 
  - fieldname: button
    class-name: usa-accordion__button
    required: true
    type: button
    content: icons are set in the USWDS base styles using "fas fa-plus" and "fas fa-minus".
 

last-updated: 5/18/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


