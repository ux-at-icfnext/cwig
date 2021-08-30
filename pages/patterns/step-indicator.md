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
  When to use the step indicator component

  **Multiple steps and screens.** Use the step indicator when the user is working through a form or process that will span several different pages that can be organized into three or more high-level steps or chapters. This helps users understand the progression of long forms and reduces uncertainty as they complete each screen.

  **Linear progression.** The step indicator is designed to complement standard back/next navigation in a linear sequence, not to be navigation of its own.

  When to consider something else
  **Long forms with conditional logic.** Consider another approach if the number of steps might change due to user input.
  **Nonlinear progression.** The step indicator isn’t appropriate for nonlinear forms or interactions that might be completed in any order.
  **Very short forms.** Don’t use a step indicator for short forms without chapters or sections. If a form or process has fewer than three sections, don’t use a step indicator.

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


