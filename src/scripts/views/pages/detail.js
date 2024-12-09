import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
} from '../templates/restaurant-template';
import {
  createDetailRestaurantSkeletonTemplate
} from '../templates/skeleton-template'; // Import skeleton template
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail">
        ${createDetailRestaurantSkeletonTemplate()} // Tampilkan skeleton detail
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const restaurantDetailContainer = document.querySelector('#restaurant-detail');

    try {

      const url = window.location.hash.slice(1).toLowerCase();
      const id = url.split('/')[2];


      restaurantDetailContainer.innerHTML = createDetailRestaurantSkeletonTemplate();


      const restaurant = await RestaurantSource.detailRestaurant(id);


      restaurantDetailContainer.innerHTML =
        createRestaurantDetailTemplate(restaurant);


      await this._renderLikeButton(restaurant);
    } catch (error) {

      restaurantDetailContainer.innerHTML = `
        <div class="error-message">
          <h2>Oops! Something went wrong</h2>
          <p>Failed to load restaurant details. Please try again later.</p>
          <button id="retry-button">Retry</button>
        </div>
      `;


      document.getElementById('retry-button')?.addEventListener('click', () => {
        this.afterRender();
      });

      console.error('Error loading restaurant details:', error);
    }
  },

  async _renderLikeButton(restaurant) {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    try {
      await LikeButtonInitiator.init({
        likeButtonContainer,
        restaurant,
      });
    } catch (error) {
      console.error('Error initializing like button:', error);
    }
  },


  async reloadRestaurantDetail() {
    await this.afterRender();
  }
};

export default Detail;