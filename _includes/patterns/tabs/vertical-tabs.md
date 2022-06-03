<div class="vertical_tabs">
    {%for item in page.tabs%}
   <div class="vertical_tab">
       <input type="radio" id="{{item.label}}" name="tab-group-1" checked>
       <label for="{{item.label}}">{{item.label}}</label> 
       <div class="tab_content">
           <span>{{item.content}}</span>
       </div> 
   </div>
   {%endfor%}
</div>