<!-- Start: @file-input--default -->
<div class="usa-form-group">
  <label class="usa-label" for="file-input-single">Input accepts a single file</label>
  <input id="file-input-single"
    class="usa-file-input"
    type="file"
    name="file-input-single"
    
  />
</div>
<!-- End: @file-input--default -->

<!-- Start: @file-input--specific -->
<div class="usa-form-group">
  <label class="usa-label" for="file-input-specific">Input accepts only specific file types</label>
  <span class="usa-hint" id="file-input-specific-hint">Select PDF or TXT files</span>
  <input id="file-input-specific"
    class="usa-file-input"
    type="file"
    name="file-input-specific"
    aria-describedby="file-input-specific-hint" accept=".pdf,.txt"
    multiple
  />
</div>
<!-- End: @file-input--specific -->

<!-- Start: @file-input--wildcard -->
<div class="usa-form-group">
  <label class="usa-label" for="file-input-wildcard">Input accepts any kind of image</label>
  <span class="usa-hint" id="file-input-wildcard-hint">Select any type of image format</span>
  <input id="file-input-wildcard"
    class="usa-file-input"
    type="file"
    name="file-input-wildcard"
    aria-describedby="file-input-wildcard-hint" accept="image/*"
    multiple
  />
</div>
<!-- End: @file-input--wildcard -->

<!-- Start: @file-input--multiple -->
<div class="usa-form-group">
  <label class="usa-label" for="file-input-multiple">Input accepts multiple files</label>
  <span class="usa-hint" id="file-input-multiple-hint">Select one or more files</span>
  <input id="file-input-multiple"
    class="usa-file-input"
    type="file"
    name="file-input-multiple"
    aria-describedby="file-input-multiple-hint"
    multiple
  />
</div>
<!-- End: @file-input--multiple -->

<!-- Start: @file-input--error -->
<div class="usa-form-group usa-form-group--error">
  <label class="usa-label usa-label--error" for="file-input-error">Input has an error</label>
  <span class="usa-hint" id="file-input-error-hint">Select any valid file</span>
  <span class="usa-error-message" id="file-input-error-alert">
    Display a helpful error message
  </span>
  <input id="file-input-error"
    class="usa-file-input"
    type="file"
    name="file-input-error"
    aria-describedby="file-input-error-hint file-input-error-alert"
    
  />
</div>
<!-- End: @file-input--error -->

<!-- Start: @file-input--disabled -->
<div class="usa-form-group">
  <label class="usa-label" for="file-input-disabled">Input in a disabled state</label>
  <input id="file-input-disabled"
    class="usa-file-input"
    type="file"
    name="file-input-disabled"
    
    disabled
  />
</div>
<!-- End: @file-input--disabled -->