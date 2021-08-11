---
layout: patterns
permalink: "/header"
title:  Header
description: |
  A header helps users identify where they are and provide a quick, organized way to reach the main sections of a website.

  At a minimum, it should include Site Logo & Title, main menu, and search (if site search exist).
usa-link: https://designsystem.digital.gov/components/header/
htmlpath: "patterns/header/header.md"
csspath: "patterns/header/header.scss"

specification: |
  The header is responsive and should adjust to fit the four breakpoints.
schema: 
  - fieldname: header
    class-name: Dara to confirm
    type: plain text
    required: true
    content: standard

---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

## Sections of the Header

### Banner
Please see the specifications for the responsive [banner](/banner).

### Branding (Logo & Title)
OnClick/OnTap of the logo or title, the system will display the homepage in the current window.
The logo image should have the proper alt description to discribe that it is the site logo for screen readers

### Search Widget
Please see the specifications for the [search widget](/search-widget).

### Main Menu
All the breakpoints "Tablet" and smaller use the hamburger menu to display the menu. Please see the specifications for the [hamburger menu](/hamburger-menu).
The desktop and larger breakpoints use a primary/secondary menu. Please see the specifications for the [main menu](/main-menu).
