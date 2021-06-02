---
layout: patterns
permalink: "/button"
title:  Button
htmlpath: "patterns/button/button.md"
description: "A button draws attention to important actions with a large selectable surface."
usa-link: https://designsystem.digital.gov/components/button/
specification: |
    - OnClick/OnTap of button activates desired functionality. Functionality in determined by the context of the button (for example in a search experience or as a link item).
    - Buttons use states for hover, focus, active
    - The unstyled button can be used as a text link that needs to have click-space padding
    - Buttons are keyboard accessible
    - **Disabled Button** - the disabled button is used to indicate that there is actions on the page that need to happen before the button can be used. The user cannot interact with button. Once the required functionailty has happened on the page, the disabled state should be swtiched with an actionalble button
    - **Buttons for Submitting Forms** - onSubmit of button, for validation should occur on all required fields. Please see the [forms](/forms) specification for how to deal with displaying errors and error messaging.
    - See Button Group** for how multiple buttons should interact.

schema: 
  - fieldname: button-label
    class-name: usa-button
    required: true
    type: text
    content: 80 characters
    example: "Continue"
  - fieldname: link
    required: true
    class-name: 
    type: button action


last-updated: 5/18/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

## Language
Button text should be as short as possible and lead with action words that clearly explain what will happen when the button is selected. (For example, Download, Login, Submit)

## Accessibility
It is critical that buttons conform to Section 508 best practices so that they can be used successfully by everyone. 
So, contrast of the button and text colors should meet W3C guidelines and alt text is required for all button text, except for disabled buttons (as disabled elements do not need to be read). 
Note that these buttons, if used as designed, are 508 compliant.



## Analytics Tracking
In general, all buttons should have tracking. This allows analytics for user actions on the site. 
SAMHSA developers need to ensure that there is some identifying feature on the button such as a click ID or click class. 
Analytics events are set-up by the HHS analytics team once the web page is deployed.##

## Buttons with input boxes
Input box with single button The button is attached to the end of the input box in large spaces – or stacked on smaller spaces.
- If there are multiple buttons, the input box does not have an attached button and the [button group](/button-group) is used to group the buttons.