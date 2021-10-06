---
layout: prototype/proto-basic
title: lfesdkla
permalink: /here
cards:
  - card-title: my card
    image: /assets/img/prototype/pumpkins.jpg
    body: kjfdsh kfjsdkjbs
    button: click me
---
dsvdsvdvkbs dvbsd,sd v.kbvs
 sdjkvb jsdnvlsdv nvkld

<div class="resources">
        <ul class="usa-card-group">
            {% for card in page.cards %}
                {% include patterns/card/card-wide-jk.md  data=card %}
            {% endfor %}
        </ul>
    </div>