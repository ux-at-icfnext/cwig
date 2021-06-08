---
layout: patterns
permalink: "/summary-box"
title:  Summary Box
htmlpath: "patterns/summary-box/summary-box.md"
csspath: "patterns/summary-box/summary-box.scss"
description:  A summary box highlights key information from a longer page or displays next steps.


usa-link: https://designsystem.digital.gov/components/summary-box/
specification: 
on click of links displays destination in current window 
  on hover display hover state 
  
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


