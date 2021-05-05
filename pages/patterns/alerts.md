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
    class-name:
    required: except on no-icon type
    content: fas-exclamation-circle | etccc




last-updated: 4/28/21
---

