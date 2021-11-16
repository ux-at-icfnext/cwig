<link rel="stylesheet" href="/assets/css/prototype/filter.scss">
<div class="clear__filters">
    <h3 id="filter__results">Filter your results</h4>
    <button id="clear__filters">Clear Filters</button>
</div>
<div class="accordion">
    {% for item in page.accordion %}
    <div>
        <input type="checkbox" name="filter_accordion" id="{{item.name}}" class="accordion__input">
        <label for="{{item.name}}" class="accordion__label">{{item.name}}</label>
        <div class="accordion__content">
        {% for item in page.filter %}
            <div class="filter__checkbox">
                <input type="checkbox" id="{{item.label}}" name="{{item.label}}" value="{{item.label}}">
                <label for="{{item.label}}">{{item.label}}</label>
            </div>
        {% endfor %}
        </div>
    </div>
    {% endfor %}
</div>