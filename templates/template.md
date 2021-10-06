---
layout: default
permalink: "/template"
title: Template
---
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/assets/css/temp.css">
    </head>
    <body>
        <div class="description">
        <p>Description</p>
        </div>
        <section class="section">
            <div class="image_screenshot">
                <img src="https://via.placeholder.com/50" alt="placeholder" class="responsive">
                <button id="open">Full Picture</button>
            </div>
            <div class="functionality">
                <h2>Functionality</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </section>
        <div class="specs">
            <p> Content Specs </p>
        </div>
        <footer>
        <p>Footer</p>
        </footer>
        <div class="modal__container" id="modal__container">
            <div class="modal">
                <img src="https://via.placeholder.com/160" alt="placeholder" class="responsive">
                <button id="close">Close</button>
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
        </script>
    </body>
</html>