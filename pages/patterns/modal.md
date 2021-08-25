---
layout: patterns
permalink: "/modal"
title:  "Modal"
description: |
  A modal disables page content and focuses the user’s attention on a single task or message.
usa-link: https://designsystem.digital.gov/components/modal/
htmlpath: /patterns/modal/modal.md
csspath: /patterns/modal/modal.scss
specification: |
  ### Default & large modal
  - OnClick/OnTap modal opens over window. 
  - Modal should be no more than 95% of the screen width, making sure that the close button is in view
  - On smaller devices modal needs to scroll if it falls below the screen fold. ** NOTE ** This behavior does not come with the default USWDS! 
  - OnClick/OnTap of close button or outside of the modal window, modal closes.

  ### Modal with Forced Action
  - This modal functions in the same way as the default modal ** except ** modal only closes through button interactions, not from clicking on the screen.

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
# TODO: Complete schema included button actions

---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


