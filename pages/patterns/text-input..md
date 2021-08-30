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
  When to use the text input component

  - **Unpredictable or freeform responses.** If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.

  - **Input simplicity.** When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.

  - **Pasted content.** When users want to be able to paste in a response.
  
  When to consider something else

  **Predetermined input options.** When users are choosing from a specific set of options.
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


