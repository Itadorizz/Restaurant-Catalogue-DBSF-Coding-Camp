/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import { itActsAsFavoriteRestaurantModel } from './contracts/likeRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  // Tambahkan afterEach di dalam describe block
  afterEach(async () => {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    await Promise.all(restaurants.map(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    }));
  });

  // Pindahkan pemanggilan contract test ke dalam describe block
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});