---
layout: patterns
permalink: /process-list
title:  Process list
description: |
  A process list displays the steps or stages of important instructions or processes.
usa-link: https://designsystem.digital.gov/components/process-list/
htmlpath: /patterns/process-list/process-list.md
csspath: # path to ccs file
varspath: /patterns/process-list/process-list-variations.md
specification: |
  Use process lists to create a clear hierarchy and help users easily differentiate between individual steps or stages in a process.
  
  A process list should include between three and ten steps to prevent it from getting too unwieldy or confusing. 

  The body of each list item can be used to display additional rich text content including HTML, images, and other components like buttons, images, simple lists, links, and tables.

  Use the [step-indicator](/step-indicator) component to show the user the current step in a multi-step process, and help users work through a form or process that spans several different pages.

schema: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-process-list
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


