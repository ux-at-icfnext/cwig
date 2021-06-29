---
layout: patterns
permalink: "/tab"
title:  tab
htmlpath: "patterns/tab/tab.md"
csspath: "patterns/tab/tab.scss"
description:  |
    Pagination helps users select a page from multiple tabs.
usa-link: 
specification: |
  
On default,

The first tab is selected. In this state the tab is not clickable/tapable and appears visibly as disabled. The tabs’ content is exposed.
The other tabs are clickable/tapable and appear visibly as clickable/tapable.
OnClick / OnTab of a tab, that tab becomes the selected tab, it is not longer clickable and appears visibly as disabled. The tabs’ content is exposed.

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



