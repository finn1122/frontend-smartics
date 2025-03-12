<template>
  <div class="col-xl-9 col-lg-8">
    <div class="tp-shop-main-wrapper">
      <!-- Encabezado de la tienda -->
      <div class="tp-shop-top mb-45">
        <div class="row">
          <div class="col-xl-6">
            <div class="tp-shop-top-left d-flex align-items-center">
              <div class="tp-shop-top-tab tp-tab">
                <ul class="nav nav-tabs" id="productTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active">Tab 1</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link">Tab 2</button>
                  </li>
                </ul>
              </div>
              <div class="tp-shop-top-result">
                <p>Showing 1–3 of 37 results</p>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="tp-shop-top-select text-md-end">
              <select class="nice-select">
                <option>Default Sorting</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Lista de productos -->
      <div class="tp-shop-items-wrapper tp-shop-item-primary">
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-xl-4 col-md-6 col-sm-6">
            <div class="tp-product-item-2 mb-40">
              <div class="tp-product-thumb-2 p-relative z-index-1 fix w-img" :style="{ backgroundColor: '#f2f3f5' }">
                <a :href="`/product-details/${product.id}`">
                  <img :src="product.imageUrl" :alt="product.name">
                </a>
                <div class="tp-product-badge"></div>
                <div class="tp-product-action-2 tp-product-action-blackStyle">
                  <!-- Acciones del producto (carrito, favoritos, etc.) -->
                </div>
              </div>
              <div class="tp-product-content-2 pt-15">
                <div class="tp-product-tag-2">
                  <a href="#">{{ product.category }}</a>
                </div>
                <h3 class="tp-product-title-2">
                  <a :href="`/product-details/${product.id}`">{{ product.name }}</a>
                </h3>
                <div class="tp-product-rating-icon tp-product-rating-icon-2">
                  <span v-for="star in 5" :key="star">
                    <i class="fa-solid fa-star"></i>
                  </span>
                </div>
                <div class="tp-product-price-wrapper-2">
                  <span class="tp-product-price-2 new-price">${{ product.price }}</span>
                  <span v-if="product.oldPrice" class="tp-product-price-2 old-price">${{ product.oldPrice }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Paginación -->
      <div class="tp-shop-pagination mt-20">
        <!-- Aquí iría la paginación -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Galaxy Android Tablet",
          imageUrl: "https://i.ibb.co/jvGv6qf/mobile-1.png",
          price: 288.0,
          oldPrice: 320.0,
          category: "Mobile Tablets",
        },
        // Más productos...
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para el contenido principal */
</style>