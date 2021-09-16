---
layout: patterns
permalink: /site-alert
title:  Site alert
description: A site alert prominently displays critical, time-sensitive warnings or directions across every page so that users see it whenever they visit the site. Using the same site alert treatment across agencies helps create a consistent and predictable way for users to find urgent information across all government websites.
usa-link: https://designsystem.digital.gov/components/site-alert/
htmlpath: /patterns/site-alert/site-alert.md
csspath: # path to ccs file
varspath: /patterns/site-alert/site-alert-variations.md
specification: |
   Use a site alert to deliver a static system status update, such as notices about unavailable services or content. A site alert should appear by default at full-width and positioned near the top of every page of the site so that it's one of the first things users see. 
   
   If there's more than one message, provide a list of links within a single site alert instead of multiple, stacked alerts. 
   
   Use the [alerts](/alerts) component for page-level validation messages (like error messages on a form) or to inform a user that a task was completed successfully.


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


