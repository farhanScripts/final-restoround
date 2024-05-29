/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking & Unlike Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking & Unliking one restaurant', async ({ I }) => {
  I.see('There is no restaurant you like');
  I.amOnPage('/');
  I.seeElement('.resto_name a');
  const firstRestaurant = locate('.resto_name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorites');
  I.seeElement('.resto-card');
  const likedRestaurantTitle = await I.grabTextFrom('.resto_name a');
  assert.strictEqual(firstRestoTitle, likedRestaurantTitle);

  // skenario untuk unlike restaurant
  I.click(likedRestaurantTitle);
  I.seeElement('#liked-button');
  I.click('#liked-button');

  I.amOnPage('/#/favorites');
  I.dontSeeElement('.resto-card');
  I.see('There is no restaurant you like');
});
