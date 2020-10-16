const Header = () => {
  const template = `
    <div class="header-bg"></div>
    <div class="header-inner">
      <nav id="navbar" class="navbar">
        <ul class="nav-links">
        <li class="nav-item">
        <a href="#" class="navigate" data-id="home">Home</a>
      </li>
          <li class="nav-item">
            <a href="#" class="navigate" data-id="about">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navigate" data-id="portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="#" class="navigate" data-id="contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="side-menu">
      <div id="side-menu-nav">
        <ul class="nav-links animate-nav">
          <!--top menu nav links are duplicated to be displayed on small screens-->
          <li class="nav-item primary">
            <a href="#" class="navigate" data-id="home">Home</a>
          </li>
          <li class="nav-item primary">
            <a href="#" class="navigate" data-id="about">About</a>
          </li>
          <li class="nav-item primary">
            <a href="#" class="navigate" data-id="portfolio">Portfolio</a>
          </li>
          <li class="nav-item primary">
            <a href="#" class="navigate" data-id="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <!--hamburger button-->
    <button class="hamburger hamburger--collapse" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>`;

  return template;
};
export default Header;
