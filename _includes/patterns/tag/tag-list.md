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