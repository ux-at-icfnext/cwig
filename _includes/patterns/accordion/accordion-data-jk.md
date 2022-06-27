
<div class="usa-accordion">
    {% for accordion in page.accordion %}
      <h4 class="usa-accordion__heading">
        <button class="usa-accordion__button"
          aria-expanded="false"
          aria-controls="{{ accordion.number }}">
          {{ accordion.label }}
        </button>
      </h4>
      <div id="{{ accordion.number }}" class="usa-accordion__content usa-prose">
        <p>{{ accordion.text }}</p>
      </div>
    {% endfor %}
</div>
