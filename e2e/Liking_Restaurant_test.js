/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
  I.wait(2); // Tambahkan waktu tunggu
});

Scenario('showing empty liked restaurants', async ({ I }) => {
  // Navigasi ke halaman favorit
  I.amOnPage('/#/favorite');
  I.wait(2);

  // Pastikan tidak ada restoran favorit
  I.dontSee('Restaurant Name');
  I.see('No favorite restaurants found.', '.restaurant-list');
});

Scenario('liking one restaurant', async ({ I }) => {
  // Pastikan di halaman utama
  I.amOnPage('/');
  I.wait(2);

  // Cari dan klik restoran pertama
  I.waitForElement('.restaurant-info h3 a', 10);
  const firstRestaurantLink = locate('.restaurant-info h3 a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurantLink);

  I.click(firstRestaurantLink);
  I.wait(2);

  // Like restoran
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');
  I.wait(2);

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');
  I.wait(2);

  // Cek restoran favorit
  I.seeElement('.restaurant-card');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-info h3 a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking a restaurant', async ({ I }) => {
  // Pastikan di halaman utama
  I.amOnPage('/');
  I.wait(2);

  // Cari dan klik restoran pertama
  I.waitForElement('.restaurant-info h3 a', 10);
  const firstRestaurantLink = locate('.restaurant-info h3 a').first();
  I.click(firstRestaurantLink);
  I.wait(2);

  // Like restoran
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');
  I.wait(2);

  // Pergi ke halaman favorit
  I.amOnPage('/#/favorite');
  I.wait(2);

  // Buka detail restoran favorit
  I.click('.restaurant-info h3 a');
  I.wait(2);

  // Unlike restoran
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');
  I.wait(2);

  // Kembali ke halaman favorit
  I.amOnPage('/#/favorite');
  I.wait(2);

  // Pastikan tidak ada restoran favorit
  I.see('No favorite restaurants found.', '.restaurant-list');
});