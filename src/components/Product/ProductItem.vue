<template>
  <div class="mb-25 tp-product-item transition-3">
    <div class="tp-product-thumb p-relative fix m-img">
      <a :href="product.link" class="">
        <img :src="product.image" :alt="product.alt">
      </a>
      <div class="tp-product-badge" v-if="product.badge">
        <span class="product-hot">{{ product.badge }}</span>
      </div>
      <div class="tp-product-action">
        <button type="button" class="tp-product-action-btn tp-product-add-cart-btn">
          <div class="icon-rectangle">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            <span class="tp-product-tooltip">Add to Cart</span>
          </div>
        </button>
        <button type="button" class="tp-product-action-btn tp-product-quick-view-btn">
          <div class="icon-rectangle">
            <font-awesome-icon :icon="['fas', 'eye']" />
            <span class="tp-product-tooltip">Quick View</span>
          </div>
        </button>
        <button type="button" class="tp-product-action-btn tp-product-add-to-wishlist-btn">
          <div class="icon-rectangle">
            <font-awesome-icon :icon="['fas', 'heart']" />
            <span class="tp-product-tooltip">Add To Wishlist</span>
          </div>
        </button>
      </div>
    </div>
    <div class="tp-product-content">
      <div class="tp-product-category">
        <a :href="product.link" class="">{{ product.category }}</a>
      </div>
      <h3 class="tp-product-title">
        <a :href="product.link" class="">{{ product.title }}</a>
      </h3>
      <div class="tp-product-rating d-flex align-items-center">
        <div class="tp-product-rating-icon">
          <span v-for="star in product.rating" :key="star">
            <font-awesome-icon :icon="star === 0.5 ? ['fas', 'star-half-stroke'] : ['fas', 'star']" />
          </span>
        </div>
        <div class="tp-product-rating-text">
          <span>({{ product.reviews }} Review)</span>
        </div>
      </div>
      <div class="tp-product-price-wrapper">
        <div v-if="product.oldPrice">
          <span class="tp-product-price old-price">${{ product.oldPrice }}</span>
          <span class="tp-product-price new-price">${{ product.newPrice }}</span>
        </div>
        <span v-else class="tp-product-price new-price">${{ product.newPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Estilos generales para los productos */
.tp-product-area {
  margin-bottom: 3rem;
}

.tp-product-thumb {
  position: relative;
  overflow: hidden;
  border: 1px solid #eaebed;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
}

.tp-product-thumb img {
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.tp-product-item {
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tp-product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.tp-product-item:hover .tp-product-thumb img {
  transform: scale(1.1);
}

.tp-product-action {
  position: absolute;
  bottom: 40px;
  right: -100px;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.tp-product-item:hover .tp-product-action {
  right: 10px;
  opacity: 1;
}

.tp-product-action-btn {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  height: 40px;
  width: 40px;
  position: relative;
  transition: all 0.3s ease;
  padding: 0;
}

.tp-product-action-btn:first-child {
  border-radius: 5px 5px 0 0;
}

.tp-product-action-btn:last-child {
  border-radius: 0 0 5px 5px;
}

.tp-product-action-btn:hover {
  background-color: #f0f0f0;
}

.icon-rectangle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.tp-product-tooltip {
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  left: -100px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 12px;
}

.tp-product-action-btn:hover .tp-product-tooltip {
  visibility: visible;
  opacity: 1;
  left: -110px;
}

.tp-product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff0000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
}

.tp-product-category > a {
  font-size: 12px;
  font-weight: 500;
  color: #55585b;
  text-decoration: none;
  display: block;
  margin-bottom: -10px;
}

.tp-product-title > a {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
}

.tp-product-rating-icon span {
  color: #ffc107;
  font-size: 12px;
}

.tp-product-rating-text span {
  color: #55585b;
  font-family: "Jost", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;
  margin-left: 5px;
}

.tp-product-price.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 5px;
}

.tp-product-price.new-price {
  color: #007bff;
  font-weight: 600;
}

.tp-product-content {
  padding: 10px 30px 20px;
  border-left: 1px solid #eaebed;
  border-right: 1px solid #eaebed;
  border-bottom: 1px solid #eaebed;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.tp-section-title svg {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}

@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}
.mb-25 {
  margin-bottom: 25px;
}
</style>