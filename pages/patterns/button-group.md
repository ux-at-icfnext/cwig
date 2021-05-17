---
layout: patterns
permalink: "/button-group"
title:  Button Group
htmlpath: "patterns/button-group/button-group.md"
description: "A button group collects similar or related actions.
<br /><br />
The default button group arranges each button as a separate element with a gap between them. On mobile devices, the buttons are arranged vertically.


" 
usa-link: https://designsystem.digital.gov/components/button-group/
specification: | 
    Button group contains multiple buttons.  In most cases only one should be primary.
  
schema: # example schema below .. repeat sets for as many fields as you have
  - fieldname: button-label
    class-name: usa-classname
    required: true
    type: text
    content: 80 characters
    example: "Continue"
  - fieldname: link
    required: true
    class-name: usa-classname
    type: button action
    


last-updated: # add last date... format: 2/21/21
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


