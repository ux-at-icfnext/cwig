---
layout: patterns
permalink: "/collection"
title:  Collection
description: "A collection displays a compact list of multiple related items like articles or events. The list links each item to its original source.
" 

usa-link: https://designsystem.digital.gov/components/collection/
specification: "The collection component offers users a way to view short descriptions of related content, providing a simple way to access the original source to learn more. It’s useful when you want to highlight information like articles, events, or documents that appear elsewhere on your website or from other sources.
<br/><br/>

Each item in the collection includes a headline that links to another page and (optionally) a small image, descriptive text, and metadata such as date, time, byline, and tags.
<br/><br/>
Items in a collection should be related. This could be by publication date (for instance, all the content was posted in the last week), by content type (all articles, events, or blog posts), or by subject (all items relate to the same topic or theme). Be selective about what content you show in each collection. Consider limiting the number of items in each collection to six or fewer.
" 
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



last-updated: # add last date... format: 2/21/21
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


