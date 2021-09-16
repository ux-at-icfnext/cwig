---
layout: patterns
permalink: /time-picker
title:  Time picker
description: |
  A time picker helps users select a specific time.
usa-link: https://designsystem.digital.gov/components/time-picker/
htmlpath: /patterns/time-picker/time-picker.md
csspath: # path to ccs file
varspath: # path to variations html file
specification: |
  The time picker allows users to schedule a time from common, consistent increments, such as planning a meeting time in 30-minute blocks.

  - Onclick/Ontap of the checron icon, the dropdown slides down to reveal the available time slots.

  - Hover over any time slots actives hover state, click to make a selection
  
  - Onclick/Ontap of the "x" icon, the selection will be cleared. 
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


