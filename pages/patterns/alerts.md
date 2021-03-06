---
layout: patterns
permalink: "/alerts"
title:  Alerts
htmlpath: "patterns/alerts/alerts.md"
csspath: "patterns/alerts/alerts.scss"
varspath: "patterns/alerts/alerts-variations.md"
description: "An alert keeps users informed of important and sometimes time-sensitive changes." 
usa-link: https://designsystem.digital.gov/components/alert/
specification: |
  - Note that alert content should be text only, but may contain a link.
  - For authoring. There should be an option to apply to multiple pages or sections.
  - **If** the alert is a **site wide** communication, consider using the [Site Alert](/site-alert) instead.
schema: 
  - fieldname: heading
    class-name: usa-alert__heading
    type: h3
    required: on standard type only
    content: 60` characters
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
    required: true
    content: (icons live in the uswds images folder)

---

### Accessibility
Besure to use the correct heading level when implementing alerts. Besure not to skip heading levels.
When implementing alerts for form validation it is important to convey the number of errors, state which form field is in error and provide instructions to users on how to receover from the error