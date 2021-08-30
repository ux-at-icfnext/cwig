---
layout: patterns
permalink: /table
title:  Table
description: |
  Tables help logically organize information and group like things together, and they make it easier to understand complex content. They’re especially useful for showing long lists of sequential or structured content. Users read tables one row or column at a time making it easier to digest or compare information.
  Tables also help users find specific information within a large data set. For example, if someone is looking for how much their tax is based on their income for a particular year, it’s much easier to find the intersection of that year and income range, rather than scan or read an entire paragraph of text.
usa-link: https://designsystem.digital.gov/components/table/
htmlpath: /patterns/table/table.md
csspath: # path to ccs file
varspath: /patterns/table/table-variations.md
specification: |
  Tables are great at displaying tabular data and complex information. Minimal visual styling helps surface this information more easily.

  Use plain language and short labels to define the type of information that can be found in each column or row. 

  Take care not to vary units or formatting within the same column. Instead, normalize values so they can be easily compared. For example, if most of the rows in a table show a count in days, don’t have some rows that count by weeks.

  Align numbers which represent a sum to the right using the text alignment utilities on the table cells.

  For even better readability of dense, numerical data, consider formatting numbers that convey amounts such as percentages, currency, or tallies in a monospace font. (There’s no need to apply monospace formatting or alignment to phone numbers, zip codes, dates, or other number content that can’t be totaled.)

  If your table includes information from a specific source or contains frequently updated content, provide the source and/or last updated date. This is especially useful if your table summarizes data from a more extensive source.

  On mobile devices and other small screens, numerical data across many columns can be easier to understand if the table scrolls horizontally. Directory lists are more readable if the rows display in a stacked layout. For tables with more than 2 columns, make sure you choose either a scrollable or a stacked variant.

  It’s easier for users to read down a long list of rows than it is to read across a long list of columns. Eliminate columns when possible or consider swapping the columns and rows to improve scannability.

  Add row sorting to individual columns of long tables where the data can be logically ordered either alphabetically or numerically.

  

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


