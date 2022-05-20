<fieldset>
    {%for item in page.fieldset-text-inputs %}
        <label class="usa-label" for="input-type-text">{{item.label}}<span class="asterisk">*</span></label>
        <input
        class="usa-input"
        id="input-type-text"
        name="input-type-text"
        type="text"
        />
    {%endfor%}
    {% include patterns/dropdown/dropdown.md%}
    {% include patterns/text-input/text-input.md%}
    {% include patterns/text-input/text-input-required.md%}
    {% include patterns/dropdown/dropdown.md%}
    {% include patterns/text-input/text-input-required.md%}
</fieldset>