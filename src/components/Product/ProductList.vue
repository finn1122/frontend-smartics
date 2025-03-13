<template>
  <div class="tp-shop-main-wrapper">
    <div class="tp-shop-top mb-45">
      <div class="row">
        <div class="col-xl-6">
          <div class="tp-shop-top-left d-flex align-items-center">
            <p>Showing 1–3 of {{ products.length }} results</p>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="tp-shop-top-select text-end">
            <select class="form-select">
              <option>Default Sorting</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista de Productos -->
    <div class="row">
      <div v-for="product in products" :key="product.id" class="col-xl-4 col-md-6 col-sm-6 mb-4">
        <div class="tp-product-item-2">
          <div class="tp-product-thumb-2">
            <img :src="product.image" :alt="product.name" class="img-fluid" />
          </div>
          <div class="tp-product-content-2 pt-3">
            <h3 class="tp-product-title-2">{{ product.name }}</h3>
            <div class="tp-product-rating">
              <font-awesome-icon :icon="['fas', 'star']" v-for="i in 5" :key="i" />
            </div>
            <div class="tp-product-price">${{ product.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
};
</script>