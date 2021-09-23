
<li class="grid-col-4 usa-card">
    <div class="usa-card__container">
        <header class="usa-card__header">
            <h2 class="usa-card__heading">{{ include.data.title | default:'USA Card with Media' }}</h2>
        </header>
        <div class="usa-card__media">
            <div class="usa-card__img">
            <img src="assets/img/prototype/{{ include.data.image | default:'road.jpg'}}" alt="">
            </div>
        </div>
        <div class="usa-card__body">
            <p> {{ include.data.body | default:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}}</p>
        </div>
        <div class="usa-card__footer">
            <button class="usa-button">{{ include.data.button | default:'click me'}}</button>
        </div>
    </div>
</li>