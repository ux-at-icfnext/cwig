---

permalink: "/library"
title: Library
---

<div class="grid-row grid-gap">
  
  <div class="tablet:grid-col-4">
    <nav aria-label="Secondary navigation,,">
      <ul class="usa-sidenav">
      {% for item in site.data.navigation.library %}
        <li class="usa-sidenav__item">
          <a class="usa-nav__link" href="{{ item.href }}">{{ item.text }}</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="javascript:void(0);" class="usa-current">Current page</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="javascript:void(0);" class="usa-current">Child link</a>
            </li>
          </ul>
        </li>
        {% endfor %}
      </ul>
    </nav>
  </div>
</div>