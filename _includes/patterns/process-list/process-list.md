<ol class="usa-process-list">
  {% for item in page.previous-steps %}
    <li class="usa-process-list__item previous__step">
      <h4 class="usa-process-list__heading">{{item.heading}}</h4>
    </li>
  {%endfor%}
  <li class="usa-process-list__item current__step">
    <h4 class="usa-process-list__heading">{{page.current-step}}</h4>
  </li>
  {% for item in page.process-list %}
  <li class="usa-process-list__item">
    <h4 class="usa-process-list__heading">{{item.heading}}</h4>
  </li>
  {% endfor %}
</ol>