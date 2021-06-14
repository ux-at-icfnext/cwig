---
layout: patterns
permalink: "/modal"
title:  Modal
htmlpath: "patterns/modal/modal.md"
csspath: "patterns/modal/modal.scss"
description:  |
   A modal disables page content and focuses the user’s attention on a single task or message.

usa-link: https://designsystem.digital.gov/components/modal/
specification: |

 modal contains button(s) and link(s)

on click of links displays destination in current window 
  on hover display hover state 


   - OnClick/OnTap of button activates desired functionality. Functionality in determined by the context of the button (for example in a search experience or as a link item).
    - Buttons use states for hover, focus, active
    - The unstyled button can be used as a text link that needs to have click-space padding
    - Buttons are keyboard accessible
    - **Disabled Button** - the disabled button is used to indicate that there is actions on the page that need to happen before the button can be used. The user cannot interact with button. Once the required functionailty has happened on the page, the disabled state should be swtiched with an actionalble button
    - **Buttons for Submitting Forms** - onSubmit of button, for validation should occur on all required fields. Please see the [forms](/forms) specification for how to deal with displaying errors and error messaging.
    - See Button Group** for how multiple buttons should interact.
schema: 
  - fieldname: heading
    class-name: usa-accordion__heading
    required: true
    type: h4
    content: 80 characters
    example: "First Amendment"
  - fieldname: body
    class-name: usa-accordion__content
    required: true
    type: rich text
    content: 500 characters
    example: 
  - fieldname: button
    class-name: usa-accordion__button
    required: true
    type: button
    content: icons are set in the USWDS base styles using "fas fa-plus" and "fas fa-minus".
 

last-updated: 5/18/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


