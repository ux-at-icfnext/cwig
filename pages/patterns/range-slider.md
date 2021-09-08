---
layout: patterns
permalink: /range-slider
title:  Range Slider
description: |
  A range slider allows users to choose an approximate number from a range.
usa-link: https://designsystem.digital.gov/components/range-slider/
htmlpath: /patterns/range-slider/range-slider.md
csspath: # path to ccs file
varspath: # path to variations html file
specification: |
  Use the range slider component when the range is more important than precision or when a relative value is more important than an exact value. For instance, it could be more important for a target price selector to communicate where the target price falls within a certain range than the precise dollar amount selected.
  
  The slider control should change color to indicate it is active when a user selects it. Users should be able to drag the slider control or select somewhere along the slider itself to change the value. When appropriate, label the ends of the slider with the limits of the range (for example: “0/100”, “small/large” or “less expensive/more expensive”).

  Use [text-input](/text-input) if a user needs to enter a precise number. 


schema: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-classname
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"


---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


