/* eslint-disable indent */
import API_ENDPOINT from '../../globals/api-endpoint';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoCardTemplate = (resto) => `
  <div class="resto-card" aria-label="resto card" tabindex="0">
      <div class="img-box" tabindex="0">
        <p class="resto_rating">
          ${resto.rating}
        </p>
        <img
          class="lazyload"
          src="${API_ENDPOINT.MEDIUM_BASE_IMAGE_URL + resto.pictureId}"
          alt="resto-image"
          width="100%"
        />
      </div>
      <div class="content" tabindex="0">
        <div class="resto_info">
          <p class="resto_loc">${resto.city}</p>
          <h1 class="resto_name">
          <a href="/#/detail/${resto.id}" class="details_anchor">${
  resto.name
}</a></h1>
          <p class="resto_desc">
            ${resto.description}
          </p>
        </div>
      </div>
    </div>
  `;

const createMenuItems = (items) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  items.map((item) => `<li>${item.name}</li>`).join('');

const createCommentsItems = (comments) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  comments.map(
    (comment) => `
    <div class="comments">
      <h1>${comment.name}</h1>
      <p>${comment.date}</p>
      <p>${comment.review}</p>
    </div> 
    `,
  );
// eslint-disable-next-line no-unused-vars
const createRestoDetailsTemplate = (resto) => `
  <section class="resto_wrapper" aria-label="Restaurant Information">
    <div class="img_resto_container">
      <img class="img_resto lazyload" src="${
        API_ENDPOINT.MEDIUM_BASE_IMAGE_URL + resto.pictureId
      }" alt="restaurant-image" />
    </div>

    <div class="resto_details">
      <h1 class="resto_name">${resto.name}</h1>
      <div class="resto_information">
        <h3>Location</h3>
        <p>${resto.address}</p>
        <h3>City</h3>
        <p>${resto.city}</p>
        <h3>Description</h3>
        <p>${resto.description}</p>
      </div>
    </div>
  </section>
  <hr>
  <section class="menu_wrapper" id="menu_wrapper">
      <div>
        <h1 class="menu_detail">Our Menus</h1>
        <ul id="menu_list">
          ${createMenuItems(resto.menus.foods)}
        </ul> 
      </div>
      <div>
        <h1 class="drink_detail">Our Drinks</h2>
        <ul id="drinks_list">
          ${createMenuItems(resto.menus.drinks)}
        </ul> 
      </div>
  </section>


  <section class="comments_wrapper">
    <h1>Customer reviews</h1>
    <section class="comment_input_wrapper" id="comment-input-container">
      <form class="comment-form" id="comment-form" aria-label="comment form" action"#">
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
    ${createCommentsItems(resto.customerReviews)}
  </section>
`;

const createLikeButton = () => `
      <button aria-label="like this restaurant" id="like-button" class="thumbs_up">
        <i class="fa-regular fa-thumbs-up"></i>
      </button>
`;

const createUnlikeButton = () => `
      <button aria-label="unlike this restaurant" id="liked-button" class="thumbs_up">
        <i class="fa-solid fa-thumbs-up"></i>
      </button>
    `;

export {
  createRestoCardTemplate,
  createRestoDetailsTemplate,
  createLikeButton,
  createUnlikeButton,
  createCommentsItems,
};
