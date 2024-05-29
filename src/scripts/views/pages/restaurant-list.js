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
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg"/>
          <img src="./images/heros/hero-image_2-large.jpg" alt="Restaurant Backdrop">
        </picture>
        <div class="hero-content">
          <h1>FIND YOUR FAVORITE RESTAURANT IN INDONESIA!</h1>
          <p>You can add to favorite if you like</p>
        </div>
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
