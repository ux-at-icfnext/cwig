---
layout: col-2
permalink: "/forms"
title: Forms
usa-link: https://designsystem.digital.gov/components/form/
---

<div class="sidebar"  markdown="1">
### Form Controls
{% for item in site.data.navigation.library %}
{% if item.text == "Forms" %}
<ul>
{% for entry in item.subpages %}
<li><a href="{{ entry.href }}">{{ entry.text }}</a></li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}
</div>

<div class="article" markdown="1">

<a name="rules"></a>
## Global Rules
Forms should always be organized on the page in a way that makes sense cognitively to the users. Group elements like contact or demographic information together (see templates below for common groupings). Vertical alignment of forms, rather than using columns, makes them easy to follow and helps to ensure proper tab order.

<a name="long-forms"></a>
## Long Forms
Long forms should be broken down into accordions or paging to help keep the user from being overwhelmed or losing their place. This also makes the forms easier to manage on smaller screen sizes. (Please see the template section for suggestions on long form layouts).

<a name="required"></a>
## Required
In accordance with the [USWDS](https://designsystem.digital.gov/components/form-controls/) all fields are required unless marked as optional.

<a name="accessibility"></a>
## Accessibility
Accessibility issues are addressed within the specification of each element. However creating clean, semantic code, with elements listed in their proper order will help to ensure that they are readable both on-screen and through screen readers. For more on global accessibility guidance please see the [USWDS](https://designsystem.digital.gov/components/form-controls/).

<a name="labels"></a>
## Writing Effective Labels

<a name="errors"></a>
## Error States
**Use plain friendly language to describe user errors.** Display the particular error next to the field where the error occurred. (see parts of a field) Large forms should also display a message at the top stating the is an error, with the system moving the users view to the top message. (The template section of this guide shows examples of standard errors).

<a name="submissions"></a>
## Form Submissions
Please ensure that once a form passes validation and is submitted, the system displays a success message to the user.

<a name="field"></a>
## Parts of a Field
Each form element has multiple entities that will likely play a role in its construction. These are:
- Label
- Input field
- Required vs. Optional
- Help Text
- Masking
- Validation
- Error States
- More Information Tool Tip
- Accessibility Rules

Please be aware of these entities as you review each form element.
![image that shows how to arrange form fields](assets/img/formsfields.png)

</div>

