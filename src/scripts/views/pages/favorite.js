import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate
} from '../templates/restaurant-template';
import {
  createRestaurantSkeletonTemplate
} from '../templates/skeleton-template';

const Favorite = {
  async render() {
    return `
      <h2>Your Favorite Restaurants</h2>
      <div id="favorite-restaurant-list" class="restaurant-list">
        ${createRestaurantSkeletonTemplate(6)} // Tampilkan 6 skeleton item
      </div>
    `;
  },

  async afterRender() {
    const favoriteRestaurantListContainer = document.querySelector('#favorite-restaurant-list');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      favoriteRestaurantListContainer.innerHTML = '';

      if (restaurants.length === 0) {
        favoriteRestaurantListContainer.innerHTML = `
          <div class="no-favorites">
            <img src="/images/empty-favorites.svg" alt="No favorites" class="empty-image">
            <p>No favorite restaurants found.</p>
            <a href="/#/" class="btn-explore">Explore Restaurants</a>
          </div>
        `;
        return;
      }


      restaurants.forEach((restaurant) => {
        favoriteRestaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });


      this._addFadeInAnimation();
    } catch (error) {
      favoriteRestaurantListContainer.innerHTML = `
        <div class="error-message">
          <h3>Oops! Something went wrong</h3>
          <p>Failed to load favorite restaurants.</p>
          <button id="retry-button" class="btn-retry">Retry</button>
        </div>
      `;


      const retryButton = document.getElementById('retry-button');
      if (retryButton) {
        retryButton.addEventListener('click', () => this.afterRender());
      }

      console.error('Error loading favorite restaurants:', error);
    }
  },


  async _simulateSlowLoading(delay = 1500) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  },


  _addFadeInAnimation() {
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    restaurantCards.forEach((card, index) => {
      card.style.animation = 'fadeIn 0.5s ease forwards';
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.opacity = '0';
    });
  },


  async removeFromFavorites(restaurantId) {
    try {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurantId);

      await this.afterRender();
    } catch (error) {
      console.error('Error removing favorite restaurant:', error);
    }
  }
};

export default Favorite;