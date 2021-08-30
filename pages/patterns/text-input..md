---
layout: patterns
permalink: /text-input
title:  Text input
description: |
  A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.
usa-link: https://designsystem.digital.gov/components/text-input/
htmlpath: /patterns/text-input/text-input.md
csspath: # path to ccs file
varspath: /patterns/text-input/text-input-variations.md
specification: |
  Use the text input component for unpredictable or freeform responses and allow users to paste in a response. 
  
  -The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.

  - Only show error validation messages or stylings after a user has interacted with a particular field.

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


