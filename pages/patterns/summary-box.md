---
layout: patterns
permalink: /summary-box
title:  Summary box
description: |
  A summary box highlights key information from a longer page or displays next steps.
usa-link: https://designsystem.digital.gov/components/summary-box/
htmlpath: /patterns/summary-box/summary-box.md
csspath: # path to ccs file
varspath: # path to variations html file
specification: |
  When to use the summary box component

  **Summarize dense content.** If your page contains a lot of information, use the summary box to call out 3-5 key details that readers shouldn’t miss.

  **Highlight a short, actionable list.** If the page content describes a few steps or a checklist of items to remember, collect them in a summary box. Use five bullet points or less.

  When to consider something else

  **Internal page navigation.** Don’t use a summary box as a table of contents. If you’re listing headings for internal page navigation, use a simple unordered list of jump links or side navigation.

  **Your page is short.** The summary box gives users quick access to the most important information on a long page. If your page isn’t that long, a recap may feel redundant.

  **Your list needs more detail.** Summary boxes should be short. Use a process list, graphic list, or icon list in the body of the article when:
    - There are more than five bullet points.
    - Bullet points are longer than 20 words.
    - Bullet points require a header, image, or button.
  
  **Alerts or callouts.** you’re highlighting something new, rather than surfacing details from further down the page, use the alert component, such as the informative status alert.
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


