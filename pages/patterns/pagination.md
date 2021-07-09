---
layout: patterns
permalink: /pagination
title:  Pagination
description: |
  The pagination component allows the user to navigate between pages. This is best used for long blocks of information or in search experiences where the return is over 15 items.
usa-link: https://designsystem.digital.gov/components/pagination/
htmlpath: /patterns/pagination/pagination.md
csspath: /patterns/pagination/pagination.scss
specification: |
  OnClick/OnTap of number the associated page is displayed
  
  **Previous / Start** If user on the first page, links “previous” & “start” do not display. However, on every other page that are displayed OnClick/OnTap of previous, system displays page before current page OnClick/OnTap of start, system displays the first page

  **Next / Last** If user on the last page, links “next” & “last” do not display. However, on every other page that are displayed OnClick/OnTap of next, system displays page after current page OnClick/OnTap of last, system displays the last page
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


