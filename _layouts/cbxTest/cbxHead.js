const Header = () => {
    return (
      <div class="grid-container">
        <header class="usa-header usa-header--basic">
     <div class="usa-nav-container">
        <div class="usa-navbar">
           <div class="usa-logo" id="basic-logo">
              <em class="usa-logo__text">
              <a href="javascript:void(0)" title="CBX">
              CBX
              </a>
              </em>
           </div>
           <button class="usa-menu-btn">Menu</button>
        </div>
        <nav aria-label="Primary navigation" class="usa-nav">
           <button class="usa-nav__close">
           <img src="/img/usa-icons/close.svg" role="img" alt="Close"/>
           </button>
           <ul class="usa-nav__primary usa-accordion">
              <li class="usa-nav__primary-item">
                 <a href="/" class="usa-nav__link">
                 <span>Current Issue</span>
                 </a>
              </li>
              <li class="usa-nav__primary-item">
                 <a href="javascript:void(0)" class="usa-nav__link">
                 <span>Previous Issues</span>
                 </a>
              </li>
              <li class="usa-nav__primary-item">
                 <a href="/about" class="usa-nav__link">
                 <span>About Us</span>
                 </a>
              </li>
              <li class="usa-nav__primary-item">
                 <a href="/contact" class="usa-nav__link">
                 <span>Contact Us</span>
                 </a>
              </li>
           </ul>
           <form class="usa-search usa-search--small" role="search">
              <label class="usa-sr-only" for="basic-search-field-en-small">
              Search
              </label>
              <input class="usa-input" id="basic-search-field-en-small" type="search" name="search"/>
              <button class="usa-button" type="submit">
              <span class="usa-sr-only">Search</span>
              </button>
           </form>
        </nav>
     </div>
  </header>
  <div>
  <nav class="usa-breadcrumb" aria-label="Breadcrumbs,,">
    <ol class="usa-breadcrumb__list">
      <li class="usa-breadcrumb__list-item">
        <a href="javascript:void(0);" class="usa-breadcrumb__link">
          <span>Home</span>
        </a>
      </li>
      <li class="usa-breadcrumb__list-item">
        <a href="javascript:void(0);" class="usa-breadcrumb__link">
          <span>Current Issue</span>
        </a>
      </li>
      
    </ol>
  </nav>
  </div>
      </div>
    )
  }
  
  export default Header