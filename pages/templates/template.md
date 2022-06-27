---
layout: default
title: templates
permalink: /templates
---

View specifications for the page templates.

## Homepage
- Homepage 

## Basic Pages
- [Basic](/basic)
- [Basic with Tabs](/basic-tabs)
- Basic with Feature
- [FAQ](/faq)

## Resource Pages
- [Topics](/topics-template)
- [Subtopics](/subtopics-template)
- Resource
- Cart

## Search
- Global Search
- All Resources
- Directory
- Event Search

## Events
- [Event Landing](/events-landing-template)
- [Event Detail](/event-details)
- Event Call for Papers

## Campaign
- Campaign

## Subscriptions
- [Subscription](subscriptions-template)

## Timeline
- Timeline - simple
- Timeline - complex


<ul>
{% for page in site.pages %}
    {% if page.categories == "template" %}
        <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>