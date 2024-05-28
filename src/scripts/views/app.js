import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ navButton, navDrawer, content }) {
    this._navButton = navButton;
    this._navDrawer = navDrawer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      navButton: this._navButton,
      navDrawer: this._navDrawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkEl = document.querySelector('.skip-content');
    skipLinkEl.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#restaurant-list').focus();
    });
  }
}

export default App;
