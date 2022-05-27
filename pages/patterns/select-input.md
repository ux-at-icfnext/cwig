---
layout: patterns
permalink: /select-input
title:  Select Input
description: |
  Select input allows users to choose any option from a drop-down menu. When the user clicks on the drop-down menu, the options will immediately show, and the user will be able to click on only one at a time.
usa-link: https://designsystem.digital.gov/components/select/
htmlpath: 
csspath:
specification: |
  On click/tap of the drop-down menu, the options will immediately show, and the user will be able to click on only one at a time. Once the user clicks on an option, the dropdown menu will show only the option chosen. On click/tap of the menu again, the user will see all the options again, with a check-mark next to the one they chose. The user may change their choice however many times they want before clicking/tapping a submit button.
  
  **Use sparingly**. Use the select component only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.

  **Avoid dependent options**. Avoid making options in one select menu change based on the input to another. Users often don’t understand how choosing an item in one impacts another.
  
  **Use a good default**. When most users will (or should) pick a particular option, make it the default: <option selected="selected">Default</option>
  
  **Avoid auto-submission**. Don’t use JavaScript to automatically submit the form (or do anything else) when an option is chosen. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.

 schema: 
  - fieldname: select-input
    class-name: usa-select
    type: multi-select
    required: true
    content: alphanumeric order
    example: Option A, Option B, Option C, etc.



---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

## Accessibility

Always use a label. Make sure your select element has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the menu read “Select a state” by default).

Avoid auto-submission. Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.

