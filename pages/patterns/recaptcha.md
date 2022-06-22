---
layout: patterns
permalink: "/recaptcha"
title: reCAPTCHA
htmlpath: /patterns/recaptcha/recaptcha.md
csspath: 
description:  |
    reCAPTCHA "I'm not a robt" checkbox is a Google API that helps protect websites from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart. Use reCAPTCHA anytime you feel the page is at risk for fraud or abuse.
specification: |
  On default, the reCAPTCHA "I'm not a robot" checkbox will never be checked. To integrate the reCAPTCHA widget into our page, follow [Google's instructions](https://developers.google.com/recaptcha/intro#recaptcha-audience) for integrating the recaptcha API into our page. 
 


---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

### Accessibility:
reCAPTCHAs can pose a host of accessibility issues when used in incognito mode, or when the user clears or blocks cookies. Traditional CAPTCHAs were generally regarded as inaccessible, so Google evolved its reCAPTCHA to allow it to be used with assistive technologies. However, in incognito mode, Google can fall back to using a traditional CAPTCHA, which is difficult to solve using assistive technologies. Please be mindful of this limitation when choosing the reCAPTCHA version