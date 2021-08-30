---
layout: patterns
permalink: /validation
title:  Validation
description: |
  Stating validation requirements up front, with live feedback, means users won’t be left guessing.
usa-link: https://designsystem.digital.gov/components/validation/
htmlpath: /patterns/validation/validation.md
csspath: # path to ccs file
varspath: # path to variations html file
specification: |
  The validation component is intended primarily for usability, not as a robust security solution, since all the validation logic occurs on the client-side. The validation should be “mirrored” on the server-side for security purposes.
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


