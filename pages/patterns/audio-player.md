---
layout: patterns
permalink: "/audio-player"
title:  Audio Player
htmlpath: "patterns/audioplayer/audioplayer.md"
csspath: "patterns/audioplayer/audioplayer.scss"
description:  |
    An audio player is a component used to embed sound content in certain pages. It is housed within a rectangular card, and offers controls to allow the user to control audio playback, including a play/pause button, volume slider to increase/decrease volume, skip forward and skip back buttons to skip 10 seconds forward or back, a download button, and a progress bar the user can interact with to listen to any part of the audio they would like.
specification: |
  In general, the audio player will not be running on default.
  - On click/on tap of the play button, the play button will change into a pause button, and the audio will begin playing at a mid to low volume.  
  - On click/on tap of the thin volume slider line, the user may increase or decrease the volume while holding their click or tap.
  - On click/on tap of the skip forward or skip back buttons that look like clocks, the user can skip 10 seconds forward or rewind 10 seconds back on the audio.
  - On click/on tap of the progress bar, the user may hold their click or tap to drag the progress bar to wherever they would like to play their audio.
  - On click/on tap of the download button, the user will be able to download the audio file to their device.
  
schema: 
  - fieldname: heading
    class-name:
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

