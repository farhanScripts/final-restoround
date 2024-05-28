import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantDBSource from '../../data/restaurantDB-source';
import API_ENDPOINT from '../../globals/api-endpoint';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {
  createRestoDetailsTemplate,
  createCommentsItems,
} from '../templates/template-creator';

const RestaurantDetails = {
  async render() {
    return `
      <section class="detail_wrapper" id="resto-details">
      
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const urlLink = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDBSource.detailRestaurant(urlLink.id);
    const restoContainer = document.querySelector('#resto-details');
    restoContainer.innerHTML = createRestoDetailsTemplate(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });

    const commentForm = document.querySelector('#comment-form');
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#Name').value;
      const review = document.querySelector('#review').value;

      if (name && review) {
        await this._submitReview({ id: restaurant.id, name, review });
      }
    });
  },

  async _submitReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    });

    if (response.ok) {
      const updatedRestaurant = await RestaurantDBSource.detailRestaurant(id);
      this._updateReviews(updatedRestaurant.customerReviews);
    }
  },

  _updateReviews(reviews) {
    const commentsContainer = document.querySelector('.comments_wrapper');
    commentsContainer.innerHTML = `
      <h1>Customer reviews</h1>
      <section class="comment_input_wrapper" id="comment-input-container">
        <form class="comment-form" id="comment-form" aria-label="comment form" action="#">
          <div class="form-group">
            <label for="Name">Name</label>
            <textarea type="text" id="Name" class="form-control"></textarea>
          </div>
          <div class="form-group">
            <label for="review">Add Review</label>
            <textarea type="text" id="review" class="form-control"></textarea>
          </div>
          <div class="form-group button">
            <button type="submit">Add</button>
          </div>
        </form>
      </section>
      ${createCommentsItems(reviews)}
    `;

    // Re-add the event listener to the new form
    const commentForm = document.querySelector('#comment-form');
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#Name').value;
      const review = document.querySelector('#review').value;

      if (name && review) {
        await this._submitReview({
          id: UrlParser.parseActiveUrlWithoutCombiner().id,
          name,
          review,
        });
      }
    });
  },
};

export default RestaurantDetails;
