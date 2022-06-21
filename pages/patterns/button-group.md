---
layout: patterns
permalink: "/button-group"
title:  Button Group
htmlpath: "patterns/button-group/button-group-default.md"
csspath: "patterns/button-group/button-group.scss"

description: |
  A button group collects similar or related actions.
  The default button group arranges each button as a separate element with a gap between them. On mobile devices, the buttons are arranged vertically. 
usa-link: https://designsystem.digital.gov/components/button-group/
specification: | 
    Button group contains multiple buttons.  In most cases only one should be primary. 
    For more information about how individual buttons function - please see [buttons](/button)
  
schema: 
  - fieldname: button-label
    class-name: usa-button
    required: true
    type: text
    content: 80 characters
    example: "Continue"
  - fieldname: link
    required: true
    class-name: 
    type: button action
    


last-updated: 5/18/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


