<div class="page-footer">
    <div class="grid-container">
    {% if page.footer-accordion %}
        <div class="accordion">
            <div class="accordion__section">
                <input type="checkbox" name="related_accordion" id="related" class="accordion__input">
                <label for="related" class="accordion__label">Related Series</label>
                    <div class="accordion__content">
                        <ul class="usa-card-group">
                        {% for rel in page.links | limit: 3 %}
                            <li class="tablet:grid-col-4 usa-card page-footer-card">
                                <div class="usa-card__container">
                                    <a href="">
                                        <header class="usa-card__header">
                                            <h3>{{ rel.title }}</h3>
                                        </header>
                                        <div class="usa-card__body">
                                            {{ rel.body }}
                                        </div>
                                    </a>
                                </div>
                            </li>
                        {% endfor %}
                        </ul>
                    </div>
            </div>
        </div>  
        <div class="accordion">
            <div class="accordion__section">
                <input type="checkbox" name="ymal_accordion" id="ymal" class="accordion__input">
                <label for="ymal" class="accordion__label">You may also like</label>
                    <div class="accordion__content">
                        <ul class="usa-card-group">
                        {% for rel in page.ymal | limit: 3 %}
                            <li class="tablet:grid-col-4 usa-card page-footer-card">
                                <div class="usa-card__container">
                                    <a href="">
                                        <header class="usa-card__header">
                                            <h3>{{ rel.title }}</h3>
                                        </header>
                                        <div class="usa-card__body">
                                            {{ rel.body }}
                                        </div>
                                    </a>
                                </div>
                            </li>
                        {% endfor %}
                        </ul>
                    </div>
            </div>
        </div>  
    {% else %}
        <ul class="usa-card-group">
            <li class="tablet:grid-col-6 usa-card">
                <div class="usa-card__container">
                    <header class="usa-card__header">
                        <h3>Related Series</h3>
                    </header>
                    <div class="usa-card__body">
                        {% for rel in page.links %}
                            <ul>
                                <li>
                                    <a href="{{ rel.link }}">{{ rel.title }}</a>
                                </li>
                            </ul>
                        {% endfor %}
                    </div>
                </div>
            </li>
            <li class="tablet:grid-col-6 usa-card">
                <div class="usa-card__container">
                    <header class="usa-card__header">
                        <h3>You may also like...</h3>
                    </header>
                    <div class="usa-card__body">
                        {% for rel in page.ymal %}
                            <ul>
                                <li>
                                    <a href="{{ rel.link }}">{{ rel.title }}</a>
                                </li>
                            </ul>
                        {% endfor %}
                    </div>
                </div>
            </li>

        </ul>
    {% endif %}
    </div>
</div>