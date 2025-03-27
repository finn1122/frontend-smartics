<template>
  <div class="tp-product-details-wrapper has-sticky">
    <div class="tp-product-details-category">
      <span>{{ product.category }}</span>
    </div>
    <h3 class="tp-product-details-title">{{ product.name }}</h3>

    <div class="tp-product-details-inventory d-flex align-items-center mb-10">
      <div class="tp-product-details-stock mb-10" v-if="product.inStock">
        <span>in-stock</span>
      </div>
      <div class="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
        <div class="tp-product-details-rating">
          <span v-for="star in 5" :key="star">
            <i class="fa-solid fa-star" :class="{ 'text-warning': star <= Math.round(product.rating) }"></i>
          </span>
        </div>
        <div class="tp-product-details-reviews">
          <span>({{ product.reviewsCount }} Reviews)</span>
        </div>
      </div>
    </div>

    <p>{{ product.description }} <span>See more</span></p>

    <div class="tp-product-details-price-wrapper mb-20">
      <div>
        <span class="tp-product-details-price old-price">${{ product.oldPrice }}</span>
        <span class="tp-product-details-price new-price">${{ product.price }}</span>
      </div>
    </div>

    <div class="tp-product-details-variation">
      <div class="tp-product-details-variation-item">
        <h4 class="tp-product-details-variation-title">Color :</h4>
        <div class="tp-product-details-variation-list">
          <button
              v-for="(color, index) in product.colors"
              :key="index"
              type="button"
              class="color tp-color-variation-btn"
              :class="{ active: activeColor === index }"
              @click="activeColor = index"
              style="margin-right: 5px;"
          >
            <span :data-bg-color="color.code" :style="{ backgroundColor: color.code }"></span>
            <span class="tp-color-variation-tootltip">{{ color.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="tp-product-details-action-wrapper">
      <h3 class="tp-product-details-action-title">Quantity</h3>
      <div class="tp-product-details-action-item-wrapper d-flex align-items-center">
        <div class="tp-product-details-quantity">
          <div class="tp-product-quantity mb-15 mr-15">
            <span class="tp-cart-minus" @click="decreaseQuantity">
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span>
            <input class="tp-cart-input" type="text" disabled :value="quantity">
            <span class="tp-cart-plus" @click="increaseQuantity">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1 5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="tp-product-details-add-to-cart mb-15 w-100">
          <button class="tp-product-details-add-to-cart-btn w-100" @click="addToCart">Add To Cart</button>
        </div>
      </div>
      <router-link :to="`/product-details/${product.id}`" class="tp-product-details-buy-now-btn w-100 text-center">Buy Now</router-link>
    </div>

    <div class="tp-product-details-action-sm">
      <button type="button" class="tp-product-details-action-sm-btn">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- SVG paths here -->
        </svg> Compare
      </button>
      <button type="button" class="tp-product-details-action-sm-btn">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- SVG paths here -->
        </svg> Add Wishlist
      </button>
      <button type="button" class="tp-product-details-action-sm-btn">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- SVG paths here -->
        </svg> Ask a question
      </button>
    </div>

    <div>
      <div class="tp-product-details-query">
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>SKU: </span><p>{{ product.sku }}</p>
        </div>
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>Category: </span><p>{{ product.category }}</p>
        </div>
        <div class="tp-product-details-query-item d-flex align-items-center">
          <span>Tag: </span><p>{{ product.tags.join(', ') }}</p>
        </div>
      </div>

      <div class="tp-product-details-social">
        <span>Share: </span>
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
      </div>

      <div class="tp-product-details-msg mb-15">
        <ul>
          <li>30 days easy returns</li>
          <li>Order yours before 2.30pm for same day dispatch</li>
        </ul>
      </div>

      <div class="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
        <p>Guaranteed safe <br> &amp; secure checkout</p>
        <img src="/img/product/icons/payment-option.png" alt="Payment options">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeColor: 0,
      quantity: 1
    }
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      const productToAdd = {
        ...this.product,
        selectedColor: this.product.colors[this.activeColor],
        quantity: this.quantity
      };
      // Emit event or call store action to add to cart
      this.$emit('add-to-cart', productToAdd);
    }
  }
}
</script>