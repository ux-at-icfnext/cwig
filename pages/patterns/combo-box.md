---
layout: patterns
permalink: "/combo-box"
title:  Combo Box
htmlpath: "patterns/combo-box/combo-box.md"
description: "    When to use the combo box component:   
    More than 15 options. When there are more than 15 choices in a drop-down list it can be hard to navigate with scrolling only.
    Limited space. Use a combo box for presenting options over radio or checkboxes when screen real estate is limited."
usa-link: https://designsystem.digital.gov/components/dropdown/
specification: |
  - OnClick/OnTap of dropdown, element opens to reveal the options inside. 
  - OnClick/OnTap of option, the item is selected and the desired action is preformed byt the system.
  In most cases this will be to have data to provide to a form for submission. In rare cases it may be used as navigation to another page.
schema: 
  - fieldname: dropdown
    class-name: usa-select
    type: multi-select
    required: true
    content: alphanumeric order
    example: Option A, Option B, Option C, etc.
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


