<div class="callout__container">
    <div class="callout__header">
        <h2>{{page.callout-heading}}</h2>
    </div>
    <div class="callout__body">
            {% for item in page.related-resources %}
            <a>{{item.related-resource}}</a>
            {%endfor%}
    </div>
</div>