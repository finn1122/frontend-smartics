<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Sidebar de Filtros -->
      <div class="col-xl-3 col-lg-4">
        <div class="tp-shop-sidebar mr-10">
          <!-- Filtro de Precio -->
          <div class="tp-shop-widget mb-35">
            <h3 class="tp-shop-widget-title no-border">Price Filter</h3>
            <div class="tp-shop-widget-content">
              <div class="tp-shop-widget-filter price__slider">
                <div id="slider-range" class="mb-10">
                  <!-- Slider de precios -->
                  <vue-slider
                      v-model="priceRange"
                      :min="0"
                      :max="1200"
                      :tooltip="'always'"
                      :enable-cross="false"
                      :lazy="true"
                      @change="updatePriceRange"
                  />
                </div>
                <div class="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
                  <span class="input-range">${{ priceRange[0] }} - ${{ priceRange[1] }}</span>
                  <button class="tp-shop-widget-filter-btn" @click="applyFilter">Filter</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Filtro de Estado del Producto -->
          <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Product Status</h3>
            <div class="tp-shop-widget-content">
              <ul class="list-unstyled">
                <li>
                  <input type="checkbox" id="on-sale" />
                  <label for="on-sale">On Sale</label>
                </li>
                <li>
                  <input type="checkbox" id="in-stock" />
                  <label for="in-stock">In Stock</label>
                </li>
              </ul>
            </div>
          </div>

          <!-- Filtro de Categorías -->
          <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Categories</h3>
            <div class="tp-shop-widget-content">
              <div class="tp-shop-widget-categories">
                <ul class="list-unstyled">
                  <li v-for="category in categories" :key="category.name">
                    <a href="#" class="cursor-pointer" :class="{ active: category.isActive }" @click="toggleCategory(category)">
                      {{ category.name }} <span>{{ category.count }}</span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <!-- Productos Mejor Valorados -->
          <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Top Rated Products</h3>
            <div class="tp-shop-widget-content">
              <div v-for="product in topRatedProducts" :key="product.id" class="tp-shop-widget-product-item d-flex align-items-center mb-3">
                <div class="tp-shop-widget-product-thumb me-3">
                  <img :src="product.image" :alt="product.name" class="img-fluid" />
                </div>
                <div class="tp-shop-widget-product-content">
                  <div class="tp-shop-widget-product-rating">
                    <font-awesome-icon :icon="['fas', 'star']" v-for="i in 5" :key="i" />
                  </div>
                  <h4 class="tp-shop-widget-product-title">{{ product.name }}</h4>
                  <div class="tp-shop-widget-product-price">${{ product.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lista de Productos -->
      <div class="col-xl-9 col-lg-8">
        <div class="tp-shop-main-wrapper">
          <div class="tp-shop-top mb-45">
            <div class="row">
              <div class="col-xl-6">
                <div class="tp-shop-top-left d-flex align-items-center">
                  <p>Showing 1–3 of 37 results</p>
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

          <!-- Productos -->
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
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';


export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      priceRange: [0, 1200], // Rango inicial de precios
      categories: [
        { name: 'Headphones', count: 3 },
        { name: 'Mobile Tablets', count: 3 },
        { name: 'CPU Heat Pipes', count: 2 },
        { name: 'Headphones', count: 3 },
        { name: 'Mobile Tablets', count: 3 },
        { name: 'CPU Heat Pipes', count: 2 },
        { name: 'Headphones', count: 3 },
        { name: 'Mobile Tablets', count: 3 },
        { name: 'CPU Heat Pipes', count: 2 },
        { name: 'Headphones', count: 3 },
        { name: 'Mobile Tablets', count: 3 },
        { name: 'CPU Heat Pipes', count: 2 },
        { name: 'Headphones', count: 3 },
        { name: 'Mobile Tablets', count: 3 },
        { name: 'CPU Heat Pipes', count: 2 },
        // Agrega más categorías aquí
      ],
      topRatedProducts: [
        { id: 1, name: 'Gaming Headphone', price: 130, image: 'https://i.ibb.co/n1YRvWJ/headphone-5.png' },
        { id: 2, name: 'Apple iPad Air', price: 999, image: 'https://i.ibb.co/kxGMcrw/ipad-1.png' },
        // Agrega más productos aquí
      ],
      products: [
        { id: 1, name: 'Headphones Wireless', price: 103.2, image: 'https://i.ibb.co/WVdTgR8/headphone-1.png' },
        { id: 2, name: 'Gaming Headphone', price: 123.5, image: 'https://i.ibb.co/n1YRvWJ/headphone-5.png' },
        // Agrega más productos aquí
      ],
    };
  },
  methods: {
    // Método para actualizar el rango de precios
    updatePriceRange(value) {
      this.priceRange = value;
    },
    // Método para aplicar el filtro
    applyFilter() {
      console.log('Filtrando por rango de precios:', this.priceRange);
      // Aquí puedes agregar la lógica para filtrar los productos
    },
  },
};
</script>

<style scoped>
.tp-shop-widget-content {
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
}
.tp-shop-widget-title.no-border {
  border: 0;
  margin-bottom: 14px;
  padding-bottom: 0;
}
.tp-shop-widget-title {
  border-bottom: 1px solid #eee;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 25px;
  padding-bottom: 5px;
}
h3 {
  font-size: 28px;
}
.align-items-center {
  align-items: center !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.d-flex {
  display: flex !important
;
}

.tp-shop-widget-filter-info {
  padding: 0px; /* Espaciado interno */
}

.input-range {
  color: #6c757d; /* Color gris similar al del input del chat */
  transition: color 0.3s ease; /* Transición suave para el cambio de color */
}

.input-range:hover {
  color: #000; /* Color negro al pasar el mouse */
}

.tp-shop-widget-filter-btn {
  background-color: #f5f5f5; /* Fondo gris claro */
  color: #010f1c; /* Texto oscuro */
  font-size: 14px;
  font-weight: 400;
  padding: 2px 21px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Transición suave */
}

.tp-shop-widget-filter-btn:hover {
  background-color: #010f1c; /* Fondo negro al pasar el mouse */
  color: #fff; /* Texto blanco al pasar el mouse */
}
@media (min-width: 1200px) {
  .h3, h3 {
    font-size: 1.75rem;
  }
}

.tp-shop-widget-categories ul li {
  margin-bottom: 12px; /* Espaciado entre categorías */
}

.tp-shop-widget-categories ul li a {
  align-items: center;
  color: var(--tp-text-body);
  display: flex;
  font-size: 15px;
  font-weight: 400;
  justify-content: space-between;
  padding-left: 16px;
  position: relative;
  width: 100%;
  text-decoration: none; /* Elimina el subrayado */
  transition: color 0.3s ease, background-color 0.3s ease; /* Transición suave */
}

.tp-shop-widget-categories ul li a:hover,
.tp-shop-widget-categories ul li a.active {
  color: var(--tp-theme-primary); /* Color azul al pasar el mouse o seleccionar */
}

.tp-shop-widget-categories ul li a:hover span,
.tp-shop-widget-categories ul li a.active span {
  background-color: var(--tp-theme-primary); /* Fondo azul para el contador */
  color: #fff; /* Texto blanco para el contador */
  border-color: var(--tp-theme-primary); /* Borde azul para el contador */
}

.tp-shop-widget-categories ul li a:after {
  background-color: #e7e7e7;
  border-radius: 50%;
  content: "";
  height: 6px;
  left: 0;
  position: absolute;
  text-align: center;
  top: 10px;
  width: 6px;
}

.tp-shop-widget-categories ul li a span {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  padding: 5px 6px 3px;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; /* Transición suave */
}

.cursor-pointer, button:hover {
  cursor: pointer;
}

a, button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
}
/* Estilos personalizados para el slider */
.vue-slider {
  margin: 20px 0;
}
.vue-slider-rail {
  background-color: #eee;
}
.vue-slider-process {
  background-color: #007bff;
}
.vue-slider-dot-handle {
  border: 2px solid #007bff;
}
.vue-slider-tooltip {
  background-color: #007bff;
  border-color: #007bff;
}
</style>