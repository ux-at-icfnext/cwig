<div class="resources">
        <ul class="usa-card-group">
            {% for card in page.cards %}
            <li class="tablet:grid-col-4 usa-card">
                <div class="usa-card__container">
                    <header class="usa-card__header">
                        <h2 class="usa-card__heading">{{ card.card-title | default:'USA Card with Media' }}</h2>
                    </header>
                    <div class="usa-card__media">
                        <div class="usa-card__img">
                        <img src="{{ card.image | default:'/assets/img/prototype/road.jpg'}}" alt="">
                        </div>
                    </div>
                    <div class="usa-card__body">
                        <p> {{ card.body | default:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}}</p>
                    </div>
                    <div class="usa-card__footer">
                        <button class="usa-button">{{ card.button | default:'click me'}}</button>
                    </div>
                </div>
            </li>
            {% endfor %}
        </ul>
    </div>
</div>