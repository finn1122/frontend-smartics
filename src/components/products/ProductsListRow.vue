<template>
  <div class="tp-product-list-item d-md-flex">
    <div class="tp-product-list-thumb p-relative fix">
      <a
          v-if="product.gallery && product.gallery.length > 0"
          :href="`/product-details/${product.id}`"
          class=""
          :style="{ height: '310px', backgroundColor: 'rgb(242, 243, 245)' }"
      >
        <img :src="product.gallery[0].imageUrl" :alt="product.name" />
      </a>
      <!-- Mostrar "Sin inventario" si no hay stock -->
      <div class="tp-product-badge" v-if="!hasInventory">
        <span class="product-no-stock">Sin inventario</span>
      </div>
      <!-- Mostrar el badge si está definido -->
      <div class="tp-product-badge" v-else-if="product.badge">
        <span class="product-hot">{{ product.badge }}</span>
      </div>
      <div class="tp-product-action-2 tp-product-action-blackStyle">
        <div class="tp-product-action-item-2 d-flex flex-column" v-if="hasInventory">
          <button
              type="button"
              class="tp-product-action-btn-2 tp-product-quick-view-btn"
              :disabled="!hasInventory"
          >
            <div class="icon-rectangle">
              <font-awesome-icon :icon="['fas', 'eye']" />
              <span class="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
            </div>
          </button>
          <button
              type="button"
              class="tp-product-action-btn-2 tp-product-add-to-wishlist-btn"
              :disabled="!hasInventory"
          >
            <div class="icon-rectangle">
              <font-awesome-icon :icon="['fas', 'heart']" />
              <span class="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
            </div>
          </button>
          <button
              type="button"
              class="tp-product-action-btn-2 tp-product-add-to-compare-btn"
              :disabled="!hasInventory"
          >
            <div class="icon-rectangle">
              <font-awesome-icon :icon="['fas', 'chart-simple']" />
              <span class="tp-product-tooltip tp-product-tooltip-right">Add To Compare</span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="tp-product-list-content">
      <div class="tp-product-content-2 pt-15">
        <div class="tp-product-tag-2">
          <a :href="`/category/${category.id}`">{{ category.name }}</a>
        </div>
        <h3 class="tp-product-title-2">
          <a :href="`/product-details/${product.id}`" class="">{{ product.name }}</a>
        </h3>
        <div class="tp-product-rating-icon tp-product-rating-icon-2">
          <span v-if="!product.rating">No rating available</span>
          <span v-else v-for="(star, index) in product.rating" :key="index">
            <font-awesome-icon
                :icon="star === 0.5 ? ['fas', 'star-half-stroke'] : ['fas', 'star']"
            />
          </span>
        </div>
        <div class="tp-product-price-wrapper-2">
          <div v-if="product.bestPrice?.salePrice">
            <span class="tp-product-price-2 old-price">${{ product.bestPrice.salePrice }}</span>
            <span class="tp-product-price-2 new-price">${{ product.bestPrice.newSalePrice }}</span>
          </div>
          <span v-else class="tp-product-price-2 new-price">${{ product.bestPrice?.newSalePrice || '0.00' }}</span>
        </div>
        <p>{{ product.description || 'No description available' }}</p>
        <div class="tp-product-list-add-to-cart">
          <button class="tp-product-list-add-to-cart-btn" :disabled="!hasInventory">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListRow',
  props: {
    product: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Verificar si el producto tiene inventario
    hasInventory() {
      return this.product.bestPrice?.quantity > 0;
    },
  },
};
</script>

<style scoped>
/* Estilos compartidos entre ProductItem y ProductListItem */
.tp-product-title-2 {
  margin: 0px;
  line-height: 1.2;
  margin-top: 8px;
}

.tp-product-title a,
.tp-product-title-2 a {
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 0;
}

.tp-product-price-wrapper-2 {
  margin-bottom: 10px;
}

.tp-product-price-2.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 5px;
}

.tp-product-price-2.new-price {
  color: #007bff;
  font-weight: 600;
}

.tp-product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1; /* Asegúrate de que no esté superponiendo el borde */
}

.tp-product-badge .product-no-stock {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

.tp-product-badge .product-hot {
  background-color: #ff0000;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

.tp-product-action-2 {
  position: absolute;
  bottom: 40px;
  right: -100px;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.tp-product-list-item:hover .tp-product-action-2 {
  right: 10px;
  opacity: 1;
}

.tp-product-list-item .tp-product-list-content p {
  color: var(--tp-text-body, #55585b);
  font-family: var(--tp-ff-p, sans-serif);
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 15px;
}

.tp-product-action-btn-2 {
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

.tp-product-action-btn-2:hover {
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

.tp-product-action-btn-2:hover .tp-product-tooltip {
  visibility: visible;
  opacity: 1;
  left: -110px;
}

/* Estilos específicos para la vista de lista */
.tp-product-list-item {
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e0e2e3;
}

.tp-product-list-item:not(:last-child) {
  margin-bottom: 24px;
}

.tp-product-list-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.tp-product-list-thumb {
  flex: 0 0 30%;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  min-height: 310px; /* Asegurar altura consistente */
  background-color: rgb(242, 243, 245); /* Fondo gris */
  display: flex;
  align-items: center;
  justify-content: center;
}

.tp-product-list-thumb a img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.tp-product-list-content {
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  border: none;
}

.tp-product-list-content .tp-product-content-2 {
  padding: 20px;
}

.tp-product-list-add-to-cart-btn {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.tp-product-list-add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.tp-product-rating-icon {
  color: #ffc107;
  font-size: 12px;
}

.tp-product-tag-2 a {
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  position: relative;
}

a, button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
}

a {
  text-decoration: none;
}

.tp-product-list-thumb img {
  width: 100%; /* La imagen ocupa el 100% del ancho del contenedor */
  height: 100%; /* La imagen ocupa el 100% del alto del contenedor */
  object-fit: cover; /* Ajusta la imagen sin distorsionarla */
  border-top-left-radius: 8px; /* Esquinas redondeadas */
  border-bottom-left-radius: 8px;
}
@media (min-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }
}
</style>