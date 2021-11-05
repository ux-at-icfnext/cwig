<div class="accordion">
    {% for item in page.filter %}
    <div>
        <input type="radio" name="filter_accordion" id="{{item.name}}" class="accordion__input">
        <label for="{{item.name}}" class="accordion__label">{{item.name}}</label>
    </div>
    {% endfor %}
</div>