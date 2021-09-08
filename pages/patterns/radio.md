---
layout: patterns
permalink: /radio
title:  Radio Buttons
description: |
  The radio button component is an input type that allows the user to choose/ select one of many choices.
usa-link: https://designsystem.digital.gov/components/radio-buttons/
htmlpath: /patterns/radio-buttons/radio-buttons.md
csspath: /patterns/radio-buttons/radio-buttons.scss
varspath: /patterns/radio-buttons/radio-buttons-variations.md
specification: |
  Since only one radio button can be selected at a time (within the same group), each available choice must be its own item and label. Once a user selects one of the radio buttons in a group, the group can’t be easily reset to displaying no radio buttons selected. One possible solution would be to add a “none of the above” option to a radio button group, which would allow users to effectively unselect the other radio buttons in that group.
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


