---
layout: patterns
permalink: "/card"
title:  Card
htmlpath: "patterns/card/card.md"
csspath: "patterns/card/card.scss"
varspath: "patterns/card/card-variations.md"
description: |
    A card is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.
    An individual card is typically a member of a collection of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form — usually with a border or a shadow.
    Finally, a card is modular. This means that you can vary the order of cards in a collection without destroying any individual card’s meaning." 
usa-link: https://designsystem.digital.gov/components/card/
specification: |
  OnClick/OnTap of card system displays destination in current window 
  OnHover display hover state  
schema: 
  - fieldname: title
    class-name: usa-card__heading
    required: true
    type: customizable heading level 
    content: 50 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    required: true
    class-name: usa-card__body
    type: text
    content: 120 characters  
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - fieldname: media
    type: image 
    class-name: usa-card__img
  - fieldname: link
    type: button
    required: true
    content: URL destination
  - fieldname: layout
    type: select list
    content: default | card with media | header first | inset media | flag left | flag right
    required: uses default unless specified



last-updated: 6/26/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

### Accessibility
Be mindful of the heading level elment used for the card title. Ensure the heading level matches the current pages structure
Be mindful of using Buttons/links as needed for the CTA. Links are used to take users to different pages or jump users to sectrions of the current page. Buttons should be used for actions

