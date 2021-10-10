<div class="related-list">
    <h3>{{ page.related-label }}</h3>
    <ul>
        {% for rel in page.links %}
        <li>
            <a href="{{ rel.link }}">{{ rel.text }}</a>
        </li>
        {% endfor %}
    </ul>
</div>