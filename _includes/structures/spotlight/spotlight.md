<div class="tablet:grid-col-4 spotlight">
    <header>
        <h3>Spotlight On</h3>
        <img src="/assets/img/icons/bookmark.svg">
    </header>
    <ul>
        {% for spot in page.spotlight %}
        <li><a href="{{ spot.link }}">{{ spot.link-text }}</a>
            {% if spot.body %}
                <br /> {{ spot.body }}
            {% endif %}
        </li>
        {% endfor %}
    </ul>
</div>