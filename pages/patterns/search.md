---
layout: patterns
permalink: /search
title:  Search
description: |
  Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation
usa-link: https://designsystem.digital.gov/components/search/
htmlpath:/patterns/search/search.md
csspath: # path to ccs file
varspath: /patterns/search/search-variations.md
specification: |
  **When to use the search component**
  **Use site search.** There will always be users who would benefit from being able to search your site.
  **When to consider something else**
  **Very small sites.** On single-page or very small sites, you may be able to get away without a search bar.
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


