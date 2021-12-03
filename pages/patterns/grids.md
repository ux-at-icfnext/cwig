---
layout: styles
permalink: "/grids"
title: Grids & Layout
---

→ USWDS - [Layout Grid](https://designsystem.digital.gov/utilities/layout-grid/)

- Uses a flexible grid system to structure website content. 
    - The grid is mobile-first
    - powered by flexbox
    - and based on a twelve-column system.
- The grid supports nesting.
- The grid can be applied in either the HTML or in the SASS.
- Grid variables can be adjust in the theme-settings

## Responsive sizes
```scss
  'card':              false,   // 160px
  'card-lg':           false,   // 240px
  'mobile':            false,   // 320px
  'mobile-lg':         true,    // 480px
  'tablet':            true,    // 640px
  'tablet-lg':         false,   // 800px
  'desktop':           true,    // 1040px
  'desktop-lg':        true,   // 1200px
  'widescreen':        true,   // 1400px
  'print':             @ letter
```
_note: print sizing is not specified in the USWDS, but is a necessary aspect for CWIG users. Please read more about [printing](/printing) in our [Print Guidance Docs](/printing)_

## Headers & Footers
_The header as defined on the page includes the banner and the footer includes indentifier_ 
- The background colors for header and footer should be 100% width to provide a fully immersive experience for extra large screen sizes. 
- The content should be constained to a maximum of our widescreen width. While smaller screensizes should have reasonable padding from the edge of the screen.

## Text width maximum
For usability and in accordance with the guidance of the USWDS, paragraphs should have a max-width of 80ex. 

## Layouts
Using layouts helps to create consistent responsive spaces. Layouts can be used for multiple templates.
_Please note: these layouts show only the desktop & mobile breakpoints as examples of how the areas shift_

---

### Full Width 
<table>
    <tr>
        <td><img src="/assets/img/specs/full.png"> </td>
        <td style="vertical-align: top"> <ul><li>A: Header </li><li>1: Body</li><li>B: Footer</li>
            <li><i>remember paragraph text has a max-width of 80ex</i></li></ul>
        </td>
    </tr>
</table>
---

### Full Width Feature
The features space is above the body. In most cases this is the featured image or hero space.
<table>
    <tr>
        <td><img src="/assets/img/specs/full-feature.png"> </td>
        <td style="vertical-align: top"> <ul><li>A: Header </li><li>1: feature</li><li>2: Body</li><li>C: Footer</li>
            <li><i>remember paragraph text has a max-width of 80ex</i></li></ul>
        </td>
    </tr>
</table>
---

### Left Rail
<table>
    <tr>
        <td><img src="/assets/img/specs/left-rail.png"> </td>
        <td style="vertical-align: top"> <ul><li>A: Header </li><li>1: Left Rail</li><li>2: Body</li><li>C: Footer</li>
            </ul>
        </td>
    </tr>
</table>
---

### Left Rail Nav
Use this layout for pages that contain the left [side navigation](/side-navigation). It collapses completely on the smaller breakpoints since the full navigation is availble in the hamburger menu.
<table>
    <tr>
        <td><img src="/assets/img/specs/left-rail-nav.png"> </td>
        <td style="vertical-align: top"> <ul><li>A: Header </li><li>1: Left Rail <br/> Not displayed on breakpoints that use the hamburger menu.</li><li>2: Body</li><li>C: Footer</li>
        </ul>
        </td>
    </tr>
</table>
---

### Left Rail Feature
The features space is above the body. In most cases this is the featured image or hero space.

Use this layout for pages that contain the left [side navigation](/side-navigation). It collapses completely on the smaller breakpoints since the full navigation is availble in the hamburger menu.
<table>
    <tr>
        <td><img src="/assets/img/specs/left-rail-nav.png"> </td>
        <td style="vertical-align: top"> <ul><li>A: Header </li><li>1: feature</li><li>2: Left Rail <br/> Not displayed on breakpoints that use the hamburger menu.</li><li>3: Body</li><li>C: Footer</li>
        </ul>
        </td>
    </tr>
</table>
---

### Feature 50/50
The features space is above the body. In most cases this is the featured image or hero space.

The space below the feature is divided equally.
<table>
    <tr>
        <td><img src="/assets/img/specs/50-50.png"> </td>
        <td style="vertical-align: top"> <ul><li>A: Header </li><li>1: feature</li><li>2: Left Body </li><li>3: Right Body</li><li>C: Footer</li>
        </ul>
        </td>
    </tr>
</table>
---