---
layout: patterns
permalink: "/time-picker"
title:  Time Picker
htmlpath: "patterns/time-picker/time-picker.md"
csspath: "patterns/time-picker/time-picker.scss"
varspath: 
description: A time picker helps users select a specific time.
usa-link: https://designsystem.digital.gov/components/time-picker/
specification: |
  OnClick/OnTap of dropdown, element opens to reveal the options inside. On click of option, the item is selected and the desired action is preformed by the system.
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

