

<ul class="usa-card-group">
  <li class="tablet:grid-col-4 usa-card">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h3 class="usa-card__heading">{{ include.data.card-title}}</h3>
      </header>
      <div class="usa-card__body">
        <p>{{ include.data.body }}</p>
      </div>
      <div class="usa-card__footer">
        <button class="usa-button">{{ include.data.button | default:'click me'}}</button>
      </div>
    </div>
  </li>
</ul>
