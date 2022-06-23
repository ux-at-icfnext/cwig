---
layout: template-nav
title: "Subtopics"
categories: template
permalink: "/subtopics-template"
screenshot-lg: "/assets/img/specs/templates/subtopics.png"
screenshot-sm: "/assets/img/specs/templates/subtopics-sm.png"
layout-type: "Full with Feature"
layout-type-screenshot: "/assets/img/specs/full-feature.png"
prototype-link: "/subtopics"
---

__Table Contents:__
* TOC
{:toc}

## Page Header
Uses [hero pattern]().
- Page Title | h1
- featured image
- Page description | text - max width 72ex | 500 character max 

## Feature Section
Section Title | h2 | 140 characters max

Uses the [card media pattern](/card-media)

Functionality: 
- Title clickable
- Minimum 3 cards - maximum 9
- Cards are laid out in 3 columns mosaic style

Each card:
- card title - h3 - 80 character max - link
- card body - text - 140 character max
- link - url of target page

## Search Filter
Subtopics are filtered by the subtopic keyword.
Filters used are based on the subtopic taxonomy... please see the content strategy documentation.

For more about search functionality... please see the [search expereince](/search) specification.


## Related Series
Uses the [accordion](accordion) pattern.

Accordion Title - h2 - content: "Related Series"

The [card](/card) is dynamically created from tags that are applied to series pages. Page title, short description, and url are used from the target page to create the links.

## Related Topics
Uses the [accordion](accordion) pattern.

Accordion Title
Section Title - h2 - content: "Related Topics"

The link [card](/card) is dynamically created from tags that are applied to topcs pages. Page title, short description, and url are used from the target page to create the links.