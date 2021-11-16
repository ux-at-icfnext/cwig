<link rel="stylesheet" href="/assets/css/prototype/fieldset.scss">
<div class="related-list">
    <fieldset class="related_info" style="line-height:1.5;">
        <h3>{{ page.related-label }}</h3>
            <ul>
                {% for rel in page.links %}
                <li>
                    <a href="{{ rel.link }}">{{ rel.text }}</a>
                </li>
                {% endfor %}
            </ul>
    </fieldset>
</div>