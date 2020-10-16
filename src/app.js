import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './scss/app.scss';

const app = () => {
  document.querySelector('#header').innerHTML = Header();
  document.querySelector('#project-grid').innerHTML = Portfolio();
  const footer = document.querySelectorAll('.footer-container');
  for (let i = 0; i < footer.length; i++) {
    footer[i].innerHTML = Footer();
  }
};
// Init app
app();
// scripts
// navbar animations
import navFunc from './scripts/navbar';
navFunc();
// sections
import showSections from './scripts/showsections';
showSections();
