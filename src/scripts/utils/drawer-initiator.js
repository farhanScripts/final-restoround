const DrawerInitiator = {
  init({ navButton, navDrawer, content }) {
    navButton.addEventListener('click', (event) => {
      this._toggleDrawer(event, navDrawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, navDrawer);
    });
  },

  _toggleDrawer(event, navDrawer) {
    event.stopPropagation();
    navDrawer.classList.toggle('active');
  },

  _closeDrawer(event, navDrawer) {
    event.stopPropagation();
    navDrawer.classList.remove('active');
  },
};

export default DrawerInitiator;
