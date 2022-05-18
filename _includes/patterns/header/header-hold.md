<link href="assets/css/prototype/approved/header-styled.scss" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700,900|Ubuntu:400,500,700" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Lora:400' rel='stylesheet'>
<div class="page__header">
    <a class="usa-skipnav" href="#main-content">Skip to main content</a>

  <div class="usa-overlay"></div>
  <header class="usa-header usa-header--extended">
    <div class="usa-navbar">
      <div class="usa-logo logo__section" id="extended-logo">
        <em class="usa-logo__text">
          <img class="cwig__logo" src="/assets/img/prototype/cwig-logo-inverse.svg" alt="">
        </em>
      </div>
    <button class="usa-menu-btn menu__btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav topnav">
      <div class="usa-nav__inner">
        <button class="usa-nav__close">
          <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
        </button>
        <ul class="usa-nav__primary usa-accordion">
          <li class="usa-nav__primary-item nav__item">
            <button
              class="usa-accordion__button"
              aria-expanded="false"
              aria-controls="extended-nav-section-one"
            >
              <span>Topics</span>
            </button>
            <ul id="extended-nav-section-one" class="usa-nav__submenu nav__submenu">
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
            </ul>
          </li>
          <li class="usa-nav__primary-item nav__item">
            <button
              class="usa-accordion__button"
              aria-expanded="false"
              aria-controls="extended-nav-section-two"
            >
              <span>Resources</span>
            </button>
            <ul id="extended-nav-section-two" class="usa-nav__submenu">
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
            </ul>
          </li>
          <li class="usa-nav__primary-item nav__item">
            <button
              class="usa-accordion__button"
              aria-expanded="false"
              aria-controls="extended-nav-section-three"
            >
              <span>Stay Connected</span>
            </button>
            <ul id="extended-nav-section-three" class="usa-nav__submenu">
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
            </ul>
          </li>
          <li class="usa-nav__primary-item nav__item">
            <button
              class="usa-accordion__button"
              aria-expanded="false"
              aria-controls="extended-nav-section-four"
            >
              <span>Directory</span>
            </button>
            <ul id="extended-nav-section-four" class="usa-nav__submenu">
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
            </ul>
          </li>
          <li class="usa-nav__primary-item nav__item">
            <button
              class="usa-accordion__button"
              aria-expanded="false"
              aria-controls="extended-nav-section-five"
            >
              <span>About</span>
            </button>
            <ul id="extended-nav-section-five" class="usa-nav__submenu">
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
              <li class="usa-nav__submenu-item">
                <a href="#"> &lt;Navigation link&gt; </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
        <div class="usa-nav__secondary">
          <ul class="usa-nav__secondary-links search__links">
            <li class="usa-nav__secondary-item">
              <a href="">How to Report Abuse or Neglect</a>
            </li>
            <li class="usa-nav__secondary-item">
              <a href="">Find Help With a Personal Situation</a>
            </li>
          </ul>
          {% include patterns/search/search-styled.md %}
        </div>
  </header>