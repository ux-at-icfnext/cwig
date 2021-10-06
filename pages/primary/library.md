---
layout: default
permalink: "/library"
title: Library
---

<ul class="usa-card-group">
{% for item in site.data.navigation.library %}
  <li class="tablet:grid-col-4 usa-card">
    <div class="usa-card__container">
      <header class="usa-card__header">
        <h2 class="usa-card__heading">{{item.text}}</h2>
      </header>
      <div class="usa-card__body">
        <p>
          {{item.desc}}
        </p>
      </div>
      <div class="usa-card__footer">
        <button class="usa-button">
            <a href="{{ item.href }}" style="color: white; text-decoration: none;">Read More</a>
        </button>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>