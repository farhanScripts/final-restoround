import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// const hamburger = document.querySelector('.hamburger');
// hamburger.addEventListener('click', () => {
//   const navBar = document.querySelector('.nav');
//   navBar.classList.toggle('active');
// });

const app = new App({
  navButton: document.querySelector('#hamburgerButton'),
  navDrawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#restaurant-list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
