{%for item in page.tag%}
    <span class="tag">
        {{item.tag-label}}
        <span class="tag__close">
            &#10006
        </span>
    </span>
{%endfor%}