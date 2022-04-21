<div class="accordion">
    {% for item in page.accordion %}
    <div>
        <input type="checkbox" name="filter_accordion" id="{{item.name}}" class="accordion__input">
        <label for="{{item.name}}" class="accordion__label">{{item.name}}</label>
        <div class="accordion__content">
          <p>{{item.content}}</p>
        </div>
    </div>
    {% endfor %}
</div>