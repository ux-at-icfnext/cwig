---
layout: patterns
permalink: "/accordion"
title:  Accordion
htmlpath: "patterns/accordion/accordion.md"
csspath: "patterns/accordion/accordion.scss"
description:  |
    An accordion is a list of headers that hide or reveal additional content when selected. They are helpful for keeping pages clean and easy to navigate.
usa-link: https://designsystem.digital.gov/components/accordion/
specification: |
  In general, all accordions are closed on default. In some cases it maybe aventagious to have the first accordion in open state on load, but this technique should be used sparingly.
  - On click of a closed accordion bar, the accordion slides open to reveal the content inside, and the fa-plus icon switches to fa-minus. Any other open accordion will close.
  - On click of an open accordion bar, the accordion slides shut and the fa-minus icon is switched to the fa-plus.
  This component uses javascript functionality to work. Please see the documentation on USWDS for more information.
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

### Accessibility:
Accordion trgger heading level may need to change based on which section the component is implmented
