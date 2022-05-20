<label class="usa-label" for="options">{{page.dropdown-label}}<span class="asterisk">*</span></label>
<select class="usa-select" name="options" id="options">
{% for item in page.dropdown %}
  <option value="{{item.value}}">{{item.option}}</option>
{%endfor%}
</select>