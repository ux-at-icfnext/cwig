<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>

<div class="resources">
    <ul class="usa-card-group">
        {% for card in page.cards %}
        <li class="tablet:grid-col-4 usa-card">
            <div class="card__container">
                <header class="usa-card__header">
                    <h2 class="usa-card__heading">{{ card.card-title | default:'USA Card with Media' }}</h2>
                </header>
                <div class="usa-card__body">
                    <p> {{ card.body | default:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}}</p>
                </div>
                <div class="button-cta">
                    {% include patterns/button/button-card.md %}
            </div>
        </li>
        {% endfor %}
    </ul>
</div>