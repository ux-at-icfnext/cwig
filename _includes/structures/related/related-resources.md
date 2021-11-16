<link rel="stylesheet" href="/assets/css/prototype/fieldset.scss">
<div class="related-resources">
    <fieldset class="related_info" style="line-height: 1.5;">
        <h3> {{ page.resource-label }}</h3>
            <ul>
                {% for res in page.resources %}
                <li>
                    <a href="{{ res.link }}">{{ res.text }}</a><br />
                    {{ res.body }}
                </li>
                {% endfor %}
            </ul>
    </fieldset>
</div>