---
layout: patterns
permalink: "/modal"
title:  Pagination
htmlpath: "patterns/pagination/pagination.md"
csspath: "patterns/pagination/pagination.scss"
description:  |
   Pagination is navigation for paginated content.

usa-link: https://designsystem.digital.gov/components/pagination/
specification: |

 OnClick/OnTap of number the associated page is displayed

Previous  If user on the first page, links “previous” do not display. However, on every other page that are displayed OnClick/OnTap of previous, system displays page before current page OnClick/OnTap of start, system displays the first page

Next If user on the last page, links “next” do not display. However, on every other page that are displayed OnClick/OnTap of next, system displays page after current page OnClick/OnTap of last, system displays the last page


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


