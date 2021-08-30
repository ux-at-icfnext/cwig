---
layout: patterns
permalink: /table
title:  Table
description: |
  A table shows information in columns and rows.

  Tables help logically organize information and group like things together, and they make it easier to understand complex content. They’re especially useful for showing long lists of sequential or structured content. Users read tables one row or column at a time making it easier to digest or compare information.
  Tables also help users find specific information within a large data set. For example, if someone is looking for how much their tax is based on their income for a particular year, it’s much easier to find the intersection of that year and income range, rather than scan or read an entire paragraph of text.
usa-link: https://designsystem.digital.gov/components/table/
htmlpath: /patterns/table/table.md
csspath: # path to ccs file
varspath: /patterns/table/table-variations.md
specification: |
  When to use the table component

  **Displaying tabular data.** When you need to display tabular information, such as statistical data.

  **Displaying directories.** When listing locations or resources that have similarly-structured content for many items.

  When to consider something else

  **Non-tabular data.** Depending on the type of content, consider using other presentation formats such as definition lists or hierarchical lists.

  **Robust data visualization.** If you need to display more complex relationships or data visualizations, consider a bar graph, infographic, or other type of chart.

  **Dashboards and other layouts.** Don’t use tables in place of a layout grid. Table content should follow a consistent structure using headers and logical columns and rows.

  **Long-form content.** Table cell content should be brief and scannable. If you find yourself drafting multiple bullet points or paragraphs within a single table cell, the content is likely better off under conventional page headers or in an accordion.
  
  **Groups of items with different structures.** Consider a list or cards for content items that don’t follow a consistent pattern.


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


