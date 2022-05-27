---
layout: patterns
permalink: "/pullquote"
title:  Pullquote
htmlpath:
csspath:
description:  |
    > A pullquote (also known as a block quotation, a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface.
specification: |
  In general, pullquotes are authored, static text that draw attention to key points in the text and entice readers to continue reading by highlighting short passages. They use intro-text-left typeface, and have an indent to their left. The indent is highlighted by a thick vertical colored line.
schema: 
  - fieldname: body
    class-name: pullquote
    required: true
    type: intro-text
    content: 500 characters max, ask Christine
    example: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."
  - fieldname: attribution
    class-name: pullquote
    required: true
    type: kicker
    content: 100 characters max, ask Christine
    example: U.S. Constitution, First Amendment.
 


---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

