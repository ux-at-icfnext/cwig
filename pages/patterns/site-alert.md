---
layout: patterns
permalink: /site-alert
title:  Site alert
description: A site alert communicates urgent sitewide information.
usa-link: https://designsystem.digital.gov/components/site-alert/
htmlpath: /patterns/site-alert/site-alert.md
csspath: # path to ccs file
varspath: /patterns/site-alert/site-alert-variations.md
specification: |
  When to use the site alert component

  **Critical system notifications.** Use a site alert to deliver a static system status update, such as notices about unavailable services or content. Site alerts should appear by default and not in response to an action.

  **Messages that should be displayed on every page.** A site alert makes critical information obvious and findable on every page.

  When to consider something else

  **Responding to user actions.** Use the alert component for page-level validation messages (like error messages on a form) or to inform a user that a task was completed successfully.

  **Validating form input.** On most forms, especially longer forms, validation messages should appear inline with error messages at the top of the form.

schema: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-classname
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"


---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


