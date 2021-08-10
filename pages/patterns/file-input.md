---
layout: patterns
permalink: "/file-input"

title:  File Input
description: |
    File input allows users to attach one or multiple files.
    When to use the file input component:
    Documents are required. Ask users to provide files when it’s necessary." 
htmlpath: "patterns/file-input/file-input.md"
csspath: "patterns/file-input/file-input.scss"
varspath: "patterns/file-input/file-input-variations.md"
usa-link: https://designsystem.digital.gov/components/file-input/
specification: |
  The file input box can be set to allow the following inputs:
   - Single file upload
   - multiple file upload
   - Text or PDF only
   - Image only
  See the variations below for examples of error and disabled states.
  
  **Functionality**
  - OnClick/OnTap of input, system displays file upload. User is able to navigate their system to select a file. 
  - OR on drag and drop, the user is able to drop their file onto the input.
  - On choosing file, system then displays the chosen file amd holds it in memory. The option to "change the file" appears
  - If the user selects "change the file", the system unloads the file from memory and opens the system to navigate to a new file.
  - On submission of form, the system saves the file to the chosen location.
  NOTE: you can use the design above to try out this fuctionality

  **Error State** is a user uploads a file that does not fit the established parameters... the system displays the error state and the form is not submitted.

schema: 
  - fieldname: file input
    class-name: file-input-single
    type: attachment 
    required: true
    content: Pre-upload--show accepted file types. Post upload--show attached file name or partial file name
    example: 


last-updated: 5/26/2021
---
<!--- if extra information is needed for this pattern, write here in Markdown. -->
<!--- to learn markdown format go to https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax -->


