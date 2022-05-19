<link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700,900|Ubuntu:400,500,700" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet'>
<div class="accordion">
    {% for item in page.accordion %}
    <div class="accordion__section">
        <input type="checkbox" name="filter_accordion" id="{{item.name}}" class="accordion__input">
        <label for="{{item.name}}" class="accordion__label">{{item.name}}</label>
        <div class="accordion__content">
          <p>{{item.content}}</p>
        </div>
    </div>
    {% endfor %}
</div>