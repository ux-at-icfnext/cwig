<label class="usa-label" for="{{page.combo-box-label}}">{{page.combo-box-label}}<span class="asterisk">*</span></label>
<div class="usa-combo-box">
  <select
    class="usa-select"
    name="{{page.combo-box-label}}"
    id="{{page.combo-box-label}}"
    >
    {% for item in page.combo-box %}
      <option value="{{item.value}}">{{item.option}}</option>
    {%endfor%}
  </select>
</div>