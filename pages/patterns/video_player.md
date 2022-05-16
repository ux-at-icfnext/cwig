---
layout: patterns
permalink: "/video-player"
title:  Video Player
htmlpath: "patterns/videoplayer/videoplayer.md"
csspath: "patterns/videoplayer/videoplayer.scss"
description:  |
    A video player is a component used to embed video content in certain pages. It is housed within a rectangular card, and offers controls to allow the user to control video playback, including a play/pause button, volume slider to increase/decrease volume, a download button, a button to watch the video on full-page, and a progress bar the user can interact with to watch any part of the video they would like.
specification: |
  In general, the video player will not be running on default.
  - On click/on tap of the play button, the play button will change into a pause button, and the video will begin playing at a mid to low volume.  
  - On click/on tap of the thin volume slider line, the user may increase or decrease the volume while holding their click or tap.
  - On click/on tap of the progress bar, the user may hold their click or tap to drag the progress bar to wherever they would like to play their video.
  - On click/on tap of the download button, the user will be able to download the video file to their device, so that they may watch even while offline.
  - On click/on tap of the rectangular full-page button, the video will occupy the full-screen of the user's device and they will be able to watch at this size. If they are watching on a mobile device or tablet, the video will rotate so it will occupy the full-screen in horizontal (landscape) mode.
  
schema: 
  - fieldname: heading
    class-name: usa-accordion__heading
    required: true
    type: plain text
    content: 80 characters
    example: "First Amendment"
  - fieldname: body
    class-name: usa-accordion__content
    required: true
    type: plain text
    content: 500 characters
    example: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."
  - fieldname: button
    class-name: usa-accordion__button
    required: true
    type: button
    content: 20 characters
 


---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->

### Accessibility:
When implementing an accordion on a page, the trigger's heading level may need to change. The heading level for the trigger is based on the heading level of the section of the page that the accordion is resides in. If the accordion is added to a section that has a heading level 3 then the trigger for the accordion would be a heading level 4 (as in this example). But if the accordion is implemented in a section with a heading level 2 then the accordion trigger would need to be a heading level 3 to maintain a logical heading order hirearchy.
