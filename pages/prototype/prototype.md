---
layout: default
permalink: "/prototype"
title: "Prototype"
---

# {{ page.title }}

The CWIG prototype is used primarly for testing and for show examples of how the patterns come together to form templates. The prototype is built using page layouts in Jekyll with Netlify CMS to manage the content. 

__NOTE:__ As this is just a prototype, some items are not functional. Also, because the prototype is integrated with out Library, as we begin to add color and branding, the prototype will take on those qualities... do not be surprised by a mix of black & white and colored objects.

### Current prototypes

{% for page in site.pages %}
{% if page.categories == "prototype" %}
<a href="{{ page.url }}">{{ page.type }}: {{ page.title }}</a>
{% endif %}
{% endfor %}
