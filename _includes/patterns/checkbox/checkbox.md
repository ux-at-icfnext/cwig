{% for item in page.filter-input %}
<form class="usa-form">
  <fieldset class="usa-fieldset">
    <div class="usa-checkbox">
      <input class="usa-checkbox__input" id="{{item.name}}" type="checkbox" name="{{item.name}}" value="{{item.name}}" checked>
      <label class="usa-checkbox__label" for="{{item.name}}">{{item.name}}</label>
    </div>
  </fieldset>
</form>
{%endfor%}