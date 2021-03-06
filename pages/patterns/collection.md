---
layout: patterns
permalink: "/collection"
title:  Collection

htmlpath: "patterns/collection/collection.md"
csspath: "patterns/collection/collection.scss"
varspath: "patterns/collection/collection-variations.md"

description: |
  A collection displays a compact list of multiple related items like articles or events. The list links each item to its original source.
  
  The collection component offers users a way to view short descriptions of related content, providing a simple way to access the original source to learn more. It’s useful when you want to highlight information like articles, events, or documents that appear elsewhere on your website or from other sources.
  Each item in the collection includes a headline that links to another page and (optionally) a small image, descriptive text, and metadata such as date, time, byline, and tags.
  Items in a collection should be related. This could be by publication date (for instance, all the content was posted in the last week), by content type (all articles, events, or blog posts), or by subject (all items relate to the same topic or theme). Be selective about what content you show in each collection. Consider limiting the number of items in each collection to six or fewer.

usa-link: https://designsystem.digital.gov/components/collection/
specification: |
  OnClick/OnTap of title link, system displays destination page. _**Note** External US sites (site that are not .gov or .mil) should open in a new window._

schema: 
  - fieldname: title
    class-name: usa-collection__heading
    required: true
    type: customizable heading level
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-collection__description
    type: text
    content: 320 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - fieldname: meta-item
    class-name: "usa-collection_meta-item"
    content: "Note: there can be mutliples of this field."
    example: "can be used for items such as author or date or related link"
  - fieldname: tags
    class-name: usa-collection__meta-item usa-tag
    example: see <a href="/tag">Tag</a> pattern
  - fieldname: date
    class-name: usa-collection__calendar-date
    content: specifies calendar month and calendar day

---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


