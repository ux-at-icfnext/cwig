---
layout: patterns
permalink: "/accordion"
title:  Accordion
htmlpath: "patterns/accordion/accordion.md"
csspath: "patterns/accordion/accordion.scss"
description: "" # some information about this pattern
usa-link: https://designsystem.digital.gov/components/accordion/
specification: |+
  In general, all accordions are closed on default. In some cases it maybe aventagious to have the first accordion in open state on load, but this technique should be used sparingly.
  <br /><br />
  - On click of a closed accordion bar, the accordion slides open to reveal the content inside, and the fa-plus icon switches to fa-minus. Any other open accordion will close.
  <br /><br />
  - On click of an open accordion bar, the accordion slides shut and the fa-minus icon is switched to the fa-plus.
  <br /><br />
  This component uses javascript functionality to work. Please see the documentation on USWDS for more information.
schema: 
  - fieldname: heading
    class-name: usa-accordion__heading
    required: true
    type: h4
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-accordion__content
    required: true
    type: rich text
    content: 500 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - fieldname: button
    class-name: usa-accordion__button
    required: true
    type: button
    content: uses "fas fa-plus" for closed state and "fas fa-minus" for open state
 

variations: # use this section to list varations of this pattern .. repeat for as many varations as you have
  - pattern: # pattern folder
    pattern-name: # pattern file name


last-updated: 5/8/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


