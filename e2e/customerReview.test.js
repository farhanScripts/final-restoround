/* eslint-disable no-undef */
Feature('Customer Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Adding 1 reviews to one restaurant', async () => {
  I.seeElement('.resto_name a');
  I.click(locate('.resto_name a').first());
});
