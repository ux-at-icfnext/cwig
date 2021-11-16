---
layout: patterns
permalink: "/icon-list"
title:  Icon List
description: |
  An icon list reinforces the meaning and visibility of individual list items with a leading icon. Read more about [Icons](/icons)
usa-link: "https://designsystem.digital.gov/components/icon-list/"
htmlpath: "patterns/icon-list/icon-list.md"
csspath: "patterns/icon-list/icon-list.scss"
varspath: "patterns/icon-list/icon-list-variations.md"
specification: # write up something cool to say here about this pattern |
schema: # example schema below .. repeat sets for as many fields as you have
  - fieldname: icon
    required: true
    type: svg
  - fieldname: icon size
    type: size
    content: to use large icons to class usa-icon-list--size-lg {{ we should set this option in the authoring environment }}
  - fieldname: content
    type: text
    content: 140 characters
    example: Wear mask, Wash hands frequently, Keep a minimum of 6 feet distance from others
    required: true
  - fieldname: title
    type: hierarchically aligned with other tags on page
    content: 50-60 characters
    example: Top Ten Tips to Stay Healthy During Pandemic
  - fieldname: title size
    type: size
    content: larger text can be used in the title {{ this should be set as an option i nthe authoring environment }}
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"


---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


