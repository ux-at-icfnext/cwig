{%for item in page.text-inputs %}
<label class="usa-label" for="input-type-text">{{item.label}}<span class="asterisk">*</span></label>
<input
  class="usa-input"
  id="input-type-text"
  name="input-type-text"
  type="text"
/>
{%endfor%}