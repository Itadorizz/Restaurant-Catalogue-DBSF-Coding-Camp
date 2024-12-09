export const createRestaurantSkeletonTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <div class="restaurant-skeleton-card">
        <div class="skeleton-image"></div>
        <div class="skeleton-content">
          <div class="skeleton-title"></div>
          <div class="skeleton-description">
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
          </div>
          <div class="skeleton-rating">
            <div class="skeleton-star"></div>
            <div class="skeleton-rating-text"></div>
          </div>
        </div>
      </div>
    `;
  }

  return template;
};

export const createDetailRestaurantSkeletonTemplate = () => `
  <div class="restaurant-detail-skeleton">
    <div class="skeleton-detail-image"></div>
    <div class="skeleton-detail-content">
      <div class="skeleton-title"></div>
      <div class="skeleton-description">
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
      </div>
      <div class="skeleton-info">
        <div class="skeleton-category"></div>
        <div class="skeleton-location"></div>
      </div>
      <div class="skeleton-menu-section">
        <div class="skeleton-menu-title"></div>
        <div class="skeleton-menu-grid">
          <div class="skeleton-menu-item"></div>
          <div class="skeleton-menu-item"></div>
          <div class="skeleton-menu-item"></div>
          <div class="skeleton-menu-item"></div>
        </div>
      </div>
    </div>
  </div>
`;