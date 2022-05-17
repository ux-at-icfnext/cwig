<label for="select_input">{{page.select-label}}</label>

<select name="select_input" id="select_input">
    {% for item in page.select %}
        <option value="{{item.select-value}}" placeholder="placeholder">{{item.select-value}}</option>
    {%endfor%}
</select>