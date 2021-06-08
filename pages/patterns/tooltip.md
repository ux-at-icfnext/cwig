---
layout: patterns
permalink: "/Tooltip"
title:  Tooltip
htmlpath: "patterns/tooltip/tooltip.md"
csspath: "patterns/tooltip/tooltip.scss"
varspath: 
description: "A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.
  When to use the tooltip component
Helpful, non-critical information. Use tooltips to strengthen an existing message.
Enhance confidence. Use tooltips to increase certainty about an interaction.
Brief descriptions. Tooltips perform best with succinct helper text.
Lack of space. Tooltips are useful as a last resort for space-constrained UI. Explore other options for keeping content visible without a tooltip. "
usa-link: https://designsystem.digital.gov/components/tooltip/
specification: |
  on hover dispays information
schema: 
  - fieldname: heading
    class-name: usa-alert__heading
    type: h4
    required: on standard type only
    content: 80 characters
    example: "Watch out for Cat Zombies"
  - fieldname: body
    class-name: usa-alert__text
    type: text
    required: true
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - fieldname: alert type
    type: selection
    class-name: usa-alert--info | usa-alert--warning | usa-alert--error | usa-alert--success
    required: true
    content: "Options: Information, Warning, Error, Success"
  - fieldname: alert style
    class-name: usa-alert--slim | usa-alert--no-icon
    type: selection
    required: applies standard if not added
    content: "Options: Standard, Slim, No Icon"
  - fieldname: icon
    type: icon
    class-name: (icons are set in the base uswds-styles )
    required: 
    content: (icons live in the uswds images folder)




last-updated: 5/18/2021
---

