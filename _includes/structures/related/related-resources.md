<div class="related-resources">
    <h3> {{ page.resource-label }}</h3>
    <ul>
        {% for res in page.resources %}
        <li>
            <a href="{{ res.link }}">{{ res.text }}</a><br />
            {{ res.body }}
        </li>
        {% endfor %}
    </ul>
</div>