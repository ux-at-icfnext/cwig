---
layout: default
title: templates
permalink: /templates
---

View specifications for the page templates.

<ul>
{% for page in site.pages %}
    {% if page.categories == "template" %}
        <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
{% endfor %}
</ul>