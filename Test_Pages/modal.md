---
layout: default
permalink: "/modalTest"
title: Test Modal
---
<html>
    <head>
        <link href="/assets/css/modal.css" rel="stylesheet">
    </head>
    <body>
        <button id="open">Modal Test</button>
    <div class="modal__container" id="modal__container">
      <div>
        <div>
          <h2>Modal Heading</h2>
        </div>
        <div>
          <p>Modal Desc</p>
        </div>
        <div>
          <button id="close">Close</button>
          <a href="">Go Back</a>
        </div>
      </div>
    </div>
      <script>
        const open = document.getElementById('open');
        const modal__container = document.getElementById('modal__container');
        const close = document.getElementById('close');
        open.addEventListener('click',()=>{
            modal__container.classList.add('show');
          });
        close.addEventListener('click',()=>{
            modal__container.classList.remove('show');
        });
        </script>>
    </body>
</html>