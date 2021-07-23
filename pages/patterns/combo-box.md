---
layout: patterns
permalink: "/combo-box"
htmlpath: "patterns/combo-box/combo-box.md"
csspath: "patterns/combo-box/combo-box.scss"
title:  Combo Box #this was mislabeled here and above as data visualizations.  I changed it to combo box.
description: |
    A combo box helps users select an item from a large list of options.

    When to use the combo box component:   
    More than 15 options. When there are more than 15 choices in a drop-down list it can be hard to navigate with scrolling only.
    Limited space. Use a combo box for presenting options over radio or checkboxes when screen real estate is limited.

usa-link: https://designsystem.digital.gov/components/combo-box/

specification: |
    - OnClick / OnTap of box, list opens to reveal options list.
    - OnTextEntry, list is filtered, like a type ahead, to reveal the matchin content inside
    - OnClick/OnTap of list item, the list item become the select item.
        - the selected item shows in the input box and a close "X" appears to the right
        - OnClick/OnTap of "x" - the selected item is removed.

schema: 
  - fieldname: label
    class-name: usa-label
    required: true
    type: label
    content: 80 characters
  - fieldname: combo box
    class-name: usa-combo-box
    type: select menu
    required: true
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


