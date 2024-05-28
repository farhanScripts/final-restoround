import RestaurantDBSource from '../../data/restaurantDB-source';
import { createRestoCardTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
    <section
        id="hero-container"
        class="hero__wrapper"
        aria-label="restaurant-image"
        tabindex="0"
      >
        <h1>FIND YOUR FAVORITE RESTAURANT IN INDONESIA!</h1>
        <p>You can add to favorite if you like</p>
      </section>
      <h1>Restaurant List</h1>
      <section
        class="resto-list"
        id="resto-list"
        aria-label="list of restaurant"
      >

      </section>
    `;
  },

  async afterRender() {
    // fungsi untuk manggil API
    const getRestaurantList = await RestaurantDBSource.restaurantList();
    const restaurantContainer = document.querySelector('#resto-list');
    getRestaurantList.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoCardTemplate(restaurant);
    });
  },
};

export default RestaurantList;
