const navFunc = () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.animate-nav');
  const sideMenu = document.getElementById('side-menu');
  const sideMenuNav = document.getElementById('side-menu-nav');
  const menuControl = function menuAnimate() {
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('slide-from-top');
    sideMenu.classList.toggle('side-menu-visible');
    sideMenuNav.style.display = 'block';
  };
  hamburger.addEventListener('click', menuControl);
  sideMenuNav.addEventListener('click', menuControl);
  //Slide Navbar UP/Down on Scroll
  let scrollPos = 50;
  const nav = document.getElementById('header');
  const navBg = document.querySelector('.header-bg');
  function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos && windowY > 20) {
      // Scrolling UP
      nav.style.display = 'flex';
      navBg.classList.add('header-bg-slide-down');
    } else if ((scrollPos = windowY) && windowY > 20) {
      // Scrolling DOWN
      nav.style.display = 'none';
      navBg.classList.remove('header-bg-slide-down');
      navBg.classList.remove('header-bg-slide-up');
    } else {
      navBg.classList.add('header-bg-slide-up');
      //hide nav background at the top of the screen
    }
    scrollPos = windowY;
  }
  window.addEventListener('scroll', checkPosition);
};
export default navFunc;
