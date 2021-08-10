---
layout: patterns
permalink: "/date-range-picker"
title:  Date Range Picker
htmlpath: "patterns/date-range-picker/date-range-picker.md"
description: |
    A date range picker helps users select a range between two dates.

    **When to use the date range picker component:**
    Scheduling. When users need to schedule or record an event and benefit from the context of a calendar.
    When the day of the week is important. When knowing the day of the week helps users choose a specific date.

usa-link: https://designsystem.digital.gov/components/date-range-picker/
specification: |
    *See [Date Picker](/date-picker) for individual input functionality*

    The date range picker works by syncing between two date pickers. On selection of the "to" date, the second picker "from" advances to that date in the calendar so the user can easily pick the date after.
schema: 
  - fieldname: date range
    class-name: usa-date-range-picker
    type: selections
    required: true
    content: 2-digit month, 2-digit day and 4-digit year
    example: "January 01, 2022"
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


