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

cards:
  - card-title: Patterns
    body: Browse through our library of components for usage guidance and specifications.
    button: view patterns
    link: "/library"
  - card-title: Page Templates
    body: Browse through requirements for page templates.
    button: view specs
    link: "/templates"
  - card-title: Prototype
    body: The CWIG prototype is used primarly to show how the patterns come together to form templates.
    button: take me there
    link: "/prototype"
---

<div class="clear-fix">&nbsp;</div>

{% include patterns/card/card-jk.md  data=card %}