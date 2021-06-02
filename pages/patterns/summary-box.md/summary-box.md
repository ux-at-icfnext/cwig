---
layout: patterns
permalink: "/summary-box"
title:  Summary Box
htmlpath: "patterns/summary-box/summary-box.md"
csspath: "patterns/summary-box/summary-box.scss"
description:  A summary box highlights key information from a longer page or displays next steps.


usa-link: https://designsystem.digital.gov/components/summary-box/
specification: 
When to use the summary box component
Summarize dense content. If your page contains a lot of information, use the summary box to call out 3-5 key details that readers shouldn’t miss.
Highlight a short, actionable list. If the page content describes a few steps or a checklist of items to remember, collect them in a summary box. Use five bullet points or less.
  
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


