---
layout: patterns
permalink: "/collection"
title:  Collection

htmlpath: "patterns/collection/collection.md"
csspath: "patterns/collection/collection.scss"
varspath: "patterns/collection/collection-variations.md"

description: |
    A collection displays a compact list of multiple related items like articles or events. The list links each item to its original source.

usa-link: https://designsystem.digital.gov/components/collection/
specification: |
    Collection contains groups of content.  This may include links, paragraphs, and tags.
schema: 
  - fieldname: title
    class-name: usa-collection__heading
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-collection__description
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - fieldname: meta-item
    class-name: "usa-collection_meta-item"
    character: "Note: there can be mutliples of this field."
    example: "can be used for items such as author or date or related link"
  - fieldname: tags
    class-name: usa-collection_meta-item usa-tag
    example: see <a href="/tag">Tag</a> pattern




last-updated: 5/26/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


