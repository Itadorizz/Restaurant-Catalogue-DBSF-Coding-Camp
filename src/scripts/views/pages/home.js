import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate
} from '../templates/restaurant-template';
import {
  createRestaurantSkeletonTemplate
} from '../templates/skeleton-template'; // Import skeleton template

const Home = {
  async render() {
    return `
      <h2>Explore Restaurants</h2>
      <div id="restaurant-list" class="restaurant-list">
        ${createRestaurantSkeletonTemplate(6)} // Tampilkan 6 skeleton item saat awal
      </div>
    `;
  },

  async afterRender() {
    const restaurantListContainer = document.querySelector('#restaurant-list');

    try {

      restaurantListContainer.innerHTML = createRestaurantSkeletonTemplate(6);

      const restaurants = await RestaurantSource.listRestaurants();

      restaurantListContainer.innerHTML = '';


      restaurants.forEach((restaurant) => {
        restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {

      restaurantListContainer.innerHTML = `
        <div class="error-message">
          <p>Failed to load restaurants. Please try again later.</p>
          <button id="retry-button">Retry</button>
        </div>
      `;


      document.getElementById('retry-button')?.addEventListener('click', () => {
        this.afterRender(); // Coba muat ulang
      });

      console.error('Error loading restaurants:', error);
    }
  },

  async reloadRestaurants() {
    const restaurantListContainer = document.querySelector('#restaurant-list');

    try {
      restaurantListContainer.innerHTML = createRestaurantSkeletonTemplate(6);

      const restaurants = await RestaurantSource.listRestaurants();

      restaurantListContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Error reloading restaurants:', error);
    }
  }
};

export default Home;