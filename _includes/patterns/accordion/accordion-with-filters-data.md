<link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700,900|Ubuntu:400,500,700" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Lora' rel='stylesheet'>
<div class="clear__filters">
    <h3 id="filter__results">Filter your results</h4>
    <div id="clear__filters">
    <button class="usa-button inverted__button">Clear Filter</button>
    </div>
</div>
<div class="accordion">
    {% for item in site.data.prototype.filter %}
    <div class="accordion__section">
        <input type="checkbox" name="filter_accordion" id="{{item.name}}" class="accordion__input">
        <label for="{{item.name}}" class="accordion__label">{{item.name}}</label>
        {% for entry in item.filteritems %}
        <div class="accordion__content">
            <div class="checkbox">
                {% include patterns/checkbox/checkbox.md %}
            </div>
        </div>
        {%endfor%}
    </div>
    {%endfor%}
</div>