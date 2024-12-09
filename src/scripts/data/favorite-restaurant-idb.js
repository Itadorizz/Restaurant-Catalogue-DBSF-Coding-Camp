import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    // Periksa apakah object store sudah ada sebelum membuatnya
    if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    }
  },
  // Tambahkan konfigurasi tambahan jika diperlukan
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) return null;
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    // Validasi input
    if (!restaurant || !restaurant.id) {
      console.error('Invalid restaurant object');
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async deleteAll() {
    const tx = (await dbPromise).transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    await store.clear();
    await tx.done;
  },

  async searchRestaurant(query) {
    const restaurants = await this.getAllRestaurants();
    return restaurants.filter((restaurant) => {
      const loweredCaseRestaurantTitle = (restaurant.title || '-').toLowerCase();
      return loweredCaseRestaurantTitle.includes(query.toLowerCase());
    });
  }
};

export default FavoriteRestaurantIdb;