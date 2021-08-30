---
layout: patterns
permalink: /step-indicator
title:  Step indicator
description: |
  A step indicator updates users on their progress through a multi-step process.
usa-link: https://designsystem.digital.gov/components/step-indicator/
htmlpath: /patterns/step-indicator/step-indicator.md
csspath: # path to ccs file
varspath: /patterns/step-indicator/step-indicator-variations.md
specification: |
  Use the step indicator when the user is working through a form or process that will span several different pages that can be organized into three or more high-level steps or chapters. This helps users understand the progression of long forms and reduces uncertainty as they complete each screen.The step indicator is designed to complement standard back/next navigation in a linear sequence, not to be navigation of its own.

  - Use a color and text treatment for the current step segment that is distinct from both the completed and pending step segments. The current segment should be the most visually prominent segment in the step indicator. Pending segments should be the least visually prominent of the segments, but should still maintain accessible contrast and not appear disabled.

  - If labelling the step indicators, stick to very short words.

  - Use navigation like a [button-group](/button-group) to step forward and backward through a form. 

  - Each step needs an explicit heading. The step indicator segments (even with labels and counters) are not sufficient as a heading for a page or screen.

  - Using text like “[step] of [total]” next to the heading reinforces the number of total steps and helps users keep track of their location in the overall process.
  

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


