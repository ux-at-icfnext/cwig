---
layout: patterns
permalink: /card
title:  Card
htmlpath: "patterns/card/card.md"
description: "A card is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.

An individual card is typically a member of a collection of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form — usually with a border or a shadow.

Finally, a card is modular. This means that you can vary the order of cards in a collection without destroying any individual card’s meaning." 
usa-link: https://designsystem.digital.gov/components/card/
specification: # write up something cool to say here about this pattern |
schema: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    required: true
    class-name: usa-classname
    type: text
    content: 140 characters  # flag right and flag left will need fewer characters @celeake
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - fieldname: media
    type: image 
    content: #image sizing tbd 
  - fieldname: link
    type: button
    required: true
    content: URL destination
  - fieldname: layout
    type: select list
    content: default | card with media | header first | inset media | flag left | flag right
    required: uses default unless specified



last-updated: # add last date... format: 2/21/21
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


