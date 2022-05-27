---
layout: patterns

permalink: "/number-input"
title:  Number Input
description: |
  Number input allows users to enter a number within a certain range by typing it manually or by clicking/tapping arrows that either increase or decrease the number. This allows the user to control how much content they see in a page. For instance, how many search results.
htmlpath: 
csspath:
varspath: # path to variations html file
specification: |
  On default, the number input will vary according to the context. 
  
  In the case of search results, the default input will be 15. (ask Christine)
  On click/tap of the input field, the user will be able to type a number within the range specified before the input field. 
  Use the following attributes to specify restrictions:
  - max | specifies the maximum value allowed
  - min | specifies the minimum value allowed
  - step | specifies the legal number intervals
  - value | Specifies the default value

  - Only show error validation messages or stylings after a user has interacted with the field, and entered a number outside of the specified range.

---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

## Accessibility

The <label> element defines a label for several form elements.

The <label> element is useful for screen-reader users, because the screen-reader will read out loud the label when the user focus on the input element.

The <label> element also help users who have difficulty clicking on very small regions (such as radio buttons or checkboxes) - because when the user clicks the text within the <label> element, it toggles the radio button/checkbox.

The for attribute of the <label> tag should be equal to the id attribute of the <input> element to bind them together.


