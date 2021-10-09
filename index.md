---
hero:
  image: /assets/img/hero.png
  callout:
    alt: "Welcome"
    text: To CWIG Pattern Library
  button:
    href: /callout/
    text: Get Started
  link:
    text: Link to more about that priority
    href: /link/
  content: This library allows us to use the USWDS customized for our clients.
---
# Hello World

{% include structures/spotlight/spotlight.md %}
<ul>
   {% for item in site.data.navigation.library %}
      <li><a href="{{ item.href }}">{{ item.text }}</a></li>
   {% endfor %}
</ul>