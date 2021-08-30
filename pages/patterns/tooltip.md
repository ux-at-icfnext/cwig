---
layout: patterns
permalink: /tooltip
title:  Tooltip
description: |
  A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.
usa-link: https://designsystem.digital.gov/components/tooltip/
htmlpath: /patterns/tooltip/tooltip.md
csspath: # path to ccs file
varspath: /patterns/tooltip/tooltip-variations.md
specification: |
  Tooltips are generally used to strengthen an existing message or increase certainty about an interaction. Tooltips are useful as a last resort for space-constrained UI. Explore other options for keeping content visible without a tooltip.

  - Tooltips perform best with succinct helper text.

  - Use tooltips only on elements that appear interactive, like buttons or links.
  
  - If using tooltips in one context, use in all similar contexts.
  
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


