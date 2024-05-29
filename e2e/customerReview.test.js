/* eslint-disable no-undef */

Feature('Customer Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Adding 1 reviews to one restaurant', async ({ I }) => {
  I.seeElement('.resto_name a');
  I.click(locate('.resto_name a').first());

  I.fillField('#Name', 'Farhan Putra');
  I.fillField('#review', 'Makanannya enak!');

  I.click('button[type="submit"]');

  I.executeScript(() => {
    window.location.reload();
  });

  I.waitForNavigation();

  I.see('Farhan Putra');
  I.see('Makanannya enak!');
});
