---
layout: styles
permalink: "/link"
title: Links
usa-link: https://designsystem.digital.gov/components/link/
---

### Contents
- [Body Text](#body)
- [Header Text](#header)
- [Accessibility](#acc)
- [Analytics Tracking](#tracking)
- [External links](#ext)
- [File Links](#files)
- [Images](#image)

<a name="body"></a>
## Body Text Links

- TODO: CSS guidance for link & link styling

<a name="header"></a>
## Header Links

- TODO: CSS guidance for link & link styling

<a name="acc"></a>
## Accessibility

It is OK to link a full sentence, but avoid longer.
Use judgment when linking full URLs. When linking a URL, consider users who must speak it out loud and who must listen to a screen reader announce it.
Avoid link text like “Click Here,” “More,” and “Read More.” These kinds of links can be confusing when a screen reader reads them out of context.
In the case where these terms are used in cards or search returns, aria-label should be used to describe the full textual content. For example, “Read more about {title}”.

<a name="tracking"></a>
## Analytics Tracking 
User engagement on pages is key to understanding user interest in a given action. All links should be considered for analtic tagging.

<a name="ext"></a>
## External Links
There are two types of external links explained under the [OMB M-17-06](https://digital.gov/resources/required-web-content-and-links/#external-links). 
- The first reference is to links that live outside the current site but are .gov or .mil sites. In this case, the external site is still considered part of the greater USA.gov site. And as such is considered an endorced site. 
- The second reference is to any site that is not and .gov or .mil. In this case, the site is considered a non-government site, even if created by a government agency. As such, the link is not endorced by USA.gov. 

The lastest guidance to the from the USWDS is to add language to the policy page explaining non-endorced websites. Design and implentation of external links is the same regardless of distination. 

Example 1: If the link decribes the destination, then simply link the text.

<div class="quote"  markdown="1">
[CDC recommends using sunscreen when you’re outside](https://www.cdc.gov/cancer/skin/basic_info/sun-safety.htm) to reduce your risk of skin damage and skin cancer.

To ensure food safety during an emergency, [the Red Cross recommends you do not open the refrigerator or freezer](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/food-safety.html).
</div>

Example 2: Add the domain name of the site to the link

<div class="quote"  markdown="1">
[Sun safety guidance [cdc.gov].](https://www.cdc.gov/cancer/skin/basic_info/sun-safety.htm)

[Food safety during an emergency [redcross.org]](https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/food-safety.html)
</div>

<a name="files"></a>
## File Download Links
Download links include the file type and size.

Example - <a href="">Download this document (PDF | 12.5KB)</a>

<a name="image"></a>
## Image Links
Use of images as links should be avoided where possible. Instead an image should be combined with a clear call to action (cta) in the form of a text link or button.

**Accessibility**
The cta should either contain example textual the link defination or through use of an `aria-label`.
For instance:
- `<a href="#"> Learn more about the importance of mental health for teenagers</a>`
- `<a href="#" aria-label="Learn more about the importance of mental health for teenagers">Learn More</a>`
The second example here is for use in context of a pattern like a search return or a card.
**Alt Text** The image should be set to null for the alt-text in these cases since it is being used as decoration.
**IF**, however, the image is used as navigation without a text link or button. Be sure to use aria-labels to describe the link destination.

**SVG graphics:**

- SVG graphics can be referenced in the src attribute of an `<img>` element like other image formats (PNG, JPEG, GIF). In this case, the examples of [this tutorial](https://www.w3.org/WAI/tutorials/images/) can be used with SVG as well.
- As SVG images consist of tags like HTML, their code can also be used in HTML5 directly. In this case you can provide a text alternative in a `<title>` element within the SVG image. To improve accessibility support, that title should be referenced from an aria-labelledby attribute of the `<svg>` element, for example: `<svg aria-labelledby="svgtitle1"> <title id="svgtitle1">Settings</title> [other svg code] </svg>`