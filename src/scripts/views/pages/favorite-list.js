import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoCardTemplate } from '../templates/template-creator';

const FavoriteList = {
  async render() {
    return `
      <section
        id="hero-container"
        class="hero__wrapper"
        aria-label="restaurant-image"
        tabindex="0"
      >
        <h1>SEE YOUR FAVORITE RESTAURANT IN INDONESIA!</h1>
        <p>You can off to favorite if you like</p>
      </section>
      <h1 id="favorite-title">Your Favorite Restaurant</h1>
      <section
        class="resto-list"
        id="resto-list"
        aria-label="list of restaurant"
      >
          
      </section>
    `;
  },

  async afterRender() {
    // TODO: dapetin list film favorit dari DATABASE
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#resto-list');
    const titleElement = document.querySelector('#favorite-title');

    if (restaurants.length > 0) {
      titleElement.innerText = 'Your Favorite Restaurant';
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestoCardTemplate(restaurant);
      });
    } else {
      titleElement.innerText = 'There is no restaurant you like';
    }
  },
};

export default FavoriteList;
