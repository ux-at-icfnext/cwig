---
layout: template-nav
title: "Events Landing"
categories: template
permalink: "/events-landing-template"
screenshot-lg: "/assets/img/specs/templates/eventslanding-lg.png"
screenshot-sm: "/assets/img/specs/templates/eventslanding-sm.png"
layout-type: "Full Width Feature"
layout-type-screenshot: "/assets/img/specs/full-feature.png"
prototype-link: "/eventslanding"
---

__Table Contents:__
* TOC
{:toc}

## Feature Section

**Left Section**
- Page Title | h1
- Page description | text | 250 character max (ask @christine if this is right)
- Section Title | h2
- Search box uses [search widget](/search-widget)
- "Search all the events" links to <a href="events-search.md">Events Search page</a>

**Right Section**
Uses [card pattern](/card).
The title and body content should always stay the same.
- Card Title | h3
- Card body | text 
- "Fill in a submission form" links to <a href="event-submit-form.md">Event Sumit Form</a>



## Body section
Section title | h2
Uses [card pattern](/card).
Cards data is dynamically generated by pages related to this landing page. The title and body content come from the target pages title and short description. Limit to 3 cards.
Each card:
- Icon | type of event 
- Card Title | h3
- Card Body | text | Event starting date and time
- Card Body | text | Sponser name
- Card link | url of target page 

Section title | h2
- "See all upcoming events" links to canned search page where "date of event- soonest first" sorting is applied 
- Uses [card pattern](/card).
Cards data is dynamically generated by the soonest upcoming 3 events. The title and body content come from the target pages title and short description. Limit to 3 cards.
Each card:
- Icon | type of event 
- Card Title | h3
- Card Body | text | Event starting date and time
- Card Body | text | Sponser name
- Card link | url of target page 

Section title | h2
Section does not show when there's no related.
- "See all Information Gateway Events" links to canned search page where "Information Gateway" is selected under "Sponsor"
- Uses [card pattern](/card).
Cards data is dynamically generated by the 3 newest event sponsered by Information Gateway. The title and body content come from the target pages title and short description. Limit to 3 cards.
Each card:
- Icon | type of event 
- Card Title | h3
- Card Body | text | Event starting date and time
- Card Body | text | Sponser name
- Card link | url of target page 

Section title | h2
Section does not show when there's no related event.
- "See more" links to canned search page where "Information Gateway" is mentioned 
- Uses [card pattern](/card).
Cards data is dynamically generated by the 3 newest event that feature Information Gateway. The title and body content come from the target pages title and short description. Limit to 3 cards.
Each card:
- Icon | type of event 
- Card Title | h3
- Card Body | text | Event starting date and time
- Card Body | text | Sponser name
- Card link | url of target page 