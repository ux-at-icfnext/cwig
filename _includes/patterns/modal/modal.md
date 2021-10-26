  <div class="margin-y-3">
  <button id="btn1" class="usa-button">Open Default Button</button>
  <div id="modal_1" class="modal">
    <!-- Modal content -->
    <div class="usa-modal__content">
      <div class="usa-modal__main">
        <h2 class="usa-modal__heading">Are you sure you want to continue?</h2>
        <div class="usa-prose">
          <p>You have unsaved changes that will be lost.</p>
        </div>
        <div class="usa-modal__footer">
          <ul class="usa-button-group">
            <li class="usa-button-group__item">
              <button type="button" class="usa-button" id="close_btn_1">
                Continue without saving?
              </button>
            </li>
            <li class="usa-button-group__item">
              <button type="button" class="usa-button usa-button--unstyled padding-105 text-center" id="back_1">
                Go back
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button class="usa-button usa-modal__close" id="close1">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
          <use xlink:href="/assets/img/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
  </div>
</div>

  <div class="margin-y-3">
    <button id="btn2" class="usa-button">Open Large Modal</button>
    <div id="modal_2" class="modal modal__large">
      <!-- Modal content -->
      <div class="usa-modal__content">
        <div class="usa-modal__main">
          <h2 class="usa-modal__heading">Are you sure you want to continue</h2>
          <div class="usa-prose">
            <p>You have unsaved changes that will be lost.</p>
          </div>
          <div class="usa-modal__footer">
            <ul class="usa-button-group">
              <li class="usa-button-group__item">
                <button type="button" class="usa-button" id="close_btn_2">
                  Continue without saving?
                </button>
              </li>
              <li class="usa-button-group__item">
                <button type="button" class="usa-button usa-button--unstyled padding-105 text-center" id="back_2">
                  Go back
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button class="usa-button usa-modal__close" id="close2">
          <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
            <use xlink:href="/assets/img/sprite.svg#close"></use>
          </svg>
        </button>
      </div>
    </div>
</div>

  <div class="margin-y-3">
    <button id="btn3" class="usa-button">Open Modal with Forced Action</button>
    <div id="modal_3" class="modal">
      <!-- Modal content -->
      <div class="usa-modal__content">
        <div class="usa-modal__main">
          <h2 class="usa-modal__heading">Are you sure you want to continue?</h2>
          <div class="usa-prose">
            <p>You have unsaved changes that will be lost.</p>
          </div>
          <div class="usa-modal__footer">
            <ul class="usa-button-group">
              <li class="usa-button-group__item">
                <button type="button" class="usa-button" id="close_btn_3">
                  Yes, stay signed in
                </button>
              </li>
              <li class="usa-button-group__item">
                <button type="button" class="usa-button usa-button--unstyled padding-105 text-center" id="back_3">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</div>

<!--JS for modals-->
<script>
  // Get the modal
  var modal_1 = document.getElementById("modal_1");
  var modal_2 = document.getElementById("modal_2");
  var modal_3 = document.getElementById("modal_3");
  
  // Get the button that opens the modal
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  
  // Get the "x" button that closes the modal
  var btn_close1 = document.getElementsByClassName("usa-modal__close")[0];
  var btn_close = document.getElementById("close2");
  
  // Get the "Continue w/out saving" button that closes the modal
  var close_btn_1 = document.getElementById("close_btn_1");
  var close_btn_2 = document.getElementById("close_btn_2");
  // Button says "Yes, stay signed in"
  var close_btn_3 = document.getElementById("close_btn_3");
  
  // Get the "Back" button that closes the modal
  var back_1 = document.getElementById("back_1");
  var back_2 = document.getElementById("back_2");
  //Button says "Sign Out"
  var back_3 = document.getElementById("back_3");
  
  // When the user clicks the button, open the modal 
  btn1.onclick = function() {
    modal_1.style.display = "flex";
  }
  
  btn2.onclick = function(){
    modal_2.style.display = "flex";
  }
  
  btn3.onclick = function(){
    modal_3.style.display = "flex";
  }
  
  // When the user clicks on "Continue without saving", close the modal
  close_btn_1.onclick = function(){
    modal_1.style.display = "none";
  }
  close_btn_2.onclick = function(){
    modal_2.style.display = "none";
  }
  close_btn_3.onclick = function(){
    modal_3.style.display = "none";
  }
  
  // When the user clicks on "Back", close the modal
  back_1.onclick = function(){
    modal_1.style.display = "none";
  }
  back_2.onclick = function(){
    modal_2.style.display = "none";
  }
  back_3.onclick = function(){
    modal_3.style.display = "none";
  }
  
  // When the user clicks on (x), close the modal
  btn_close1.onclick = function() {
    modal_1.style.display = "none";
  }
  btn_close.onclick = function(){
    modal_2.style.display = "none";
  }
  
  </script>