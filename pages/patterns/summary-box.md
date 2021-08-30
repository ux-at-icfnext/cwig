---
layout: patterns
permalink: /summary-box
title:  Summary box
description: |
  A summary box highlights key information from a longer page or displays next steps.
usa-link: https://designsystem.digital.gov/components/summary-box/
htmlpath: /patterns/summary-box/summary-box.md
csspath: # path to ccs file
varspath: # path to variations html file
specification: |
  A summary box is used to call out 3-5 key details that readers shouldn't miss on a page that contains a lot of information. If the page content describes a few steps or a checklist of items to remember, collect them in a summary box. Use five bullet points or less.

  - It's recommended to use anchor link to link to further reading on the same page. To do this without confusing your readers, do your best to explain where the link will take them in the hyperlinked text and reiterate it with the subsequent heading.

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


