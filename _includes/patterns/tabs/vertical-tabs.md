<div class="vertical_tabs">
    <div class="vertical_tab">
       <input type="radio" id="{{page.tab_label}}" name="tab-group-1" checked>
       <label for="{{page.tab_label}}">{{page.tab_label}}</label> 
       <div class="tab_content">
           <span>{{page.tab_content}}</span>
       </div> 
   </div>
    {%for item in page.tabs%}
   <div class="vertical_tab">
       <input type="radio" id="{{item.label}}" name="tab-group-1">
       <label for="{{item.label}}">{{item.label}}</label> 
       <div class="tab_content">
           <span>{{item.content}}</span>
       </div> 
   </div>
   {%endfor%}
</div>