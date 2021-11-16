---
layout: styles
permalink: "/colors"
Title: Colors
---
<meta charset="UTF-8">
<link rel=stylesheet href="/assets/css/palette.css">
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>

<body>
    <h1>Colors</h1>
    <div class="color__aside">
        <h2 class="palette__h2">Color Palette</h2>
        <h3>Primary Colors</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."</p>
        <h3>Secondary Colors</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."</p>
            <h3>Grays</h3>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum."</p>
    </div>
    <br><br><br>
    <div class="palette">
        {% for item in site.data.colors.colors %}
        <div class="palette__item">
            <div class="palette__color" style="background: {{item.color}};">
                <div class="palette__desc">{{item.desc}}</div>
            </div>
            <input type="text" class="palette__input" value="{{item.color}}">
        </div>
        {%endfor%}
    </div>
</body>