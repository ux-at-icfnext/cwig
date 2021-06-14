---
layout: patterns
permalink: "/list"
title:  List
htmlpath: "patterns/list/list.md"
csspath: "patterns/list/list.scss"
description:  |
 A list organizes information into discrete sequential sections.
usa-link: https://designsystem.digital.gov/components/list/
specification: |
  Specification may differ depending on whether content is clickable or not.
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


