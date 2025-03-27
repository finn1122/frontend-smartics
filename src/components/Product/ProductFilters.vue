<template>
  <div class="tp-shop-sidebar mr-10">
    <!-- Filtro de Precio -->
    <div class="tp-shop-widget mb-35">
      <h3 class="tp-shop-widget-title no-border">Price Filter</h3>
      <div class="tp-shop-widget-content">
        <div class="tp-shop-widget-filter price__slider">
          <div id="slider-range" class="mb-10">
            <!-- Renderizar el Slider solo si priceRange tiene valores válidos -->
            <vue-slider
                v-if="isPriceRangeValid"
                :key="sliderKey"
                v-model="selectedPriceRange"
                :min="priceRange[0]"
                :max="priceRange[1]"
                :tooltip="'always'"
                :enable-cross="false"
                :lazy="true"
                @change="updatePriceRange"
            />
          </div>
          <div class="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
            <span class="input-range">${{ selectedPriceRange[0] }} - ${{ selectedPriceRange[1] }}</span>
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
            <input type="checkbox" id="in-stock" v-model="filters.inStock" @change="applyStatusFilters" />
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
              <a href="#" class="cursor-pointer" :class="{ active: category.isSelected }" @click="toggleCategory(category)">
                {{ category.name }} <span>{{ category.productsCount }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Productos Mejor Valorados -->
    <!--<div class="tp-shop-widget mb-50">
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
    </div>-->
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import api from "@/services/api";
import {useNotificationStore} from "@/stores/notificationStore";

export default {
  components: {
    VueSlider,
  },
  setup() {
    const notificationStore = useNotificationStore();
    return { notificationStore };
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    priceRange: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      categories: [],
      topRatedProducts: [
        { id: 1, name: 'Gaming Headphone', price: 130, image: 'https://i.ibb.co/n1YRvWJ/headphone-5.png' },
        { id: 2, name: 'Apple iPad Air', price: 999, image: 'https://i.ibb.co/kxGMcrw/ipad-1.png' },
        // Agrega más productos aquí
      ],
      selectedPriceRange: [0, 0], // Inicializar con valores por defecto
      sliderKey: 0, // Clave para forzar la reinicialización del Slider
      filters: {
        inStock: false, // Nuevo filtro para productos en stock
        // Aquí puedes tener otros filtros como priceRange, categories, etc.
      },
    };
  },
  computed: {
    // Verificar si priceRange tiene valores válidos
    isPriceRangeValid() {
      return this.priceRange.length === 2 && this.priceRange[0] <= this.priceRange[1];
    },
  },
  watch: {
    // Observar cambios en la categoría seleccionada
    category: {
      immediate: true, // Ejecutar el watcher inmediatamente al montar el componente
      handler: "updateSelectedCategory", // Llamar a updateSelectedCategory cuando cambie la categoría
    },
    // Observar cambios en el rango de precios
    // Observar cambios en el rango de precios
    priceRange: {
      immediate: true,
      handler(newRange) {
        if (this.isPriceRangeValid) {
          // Actualizar el rango de precios seleccionado
          this.selectedPriceRange = [newRange[0], newRange[1]];
          // Forzar la reinicialización del Slider
          this.sliderKey += 1;
        }
      },
    },
  },
  async created() {
    await this.loadAllCategoriesData();
    this.markMatchedCategory();
  },
  methods: {
    // Método para actualizar el rango de precios seleccionado
    updatePriceRange() {
      // Asegurarnos de que selectedPriceRange esté dentro del rango permitido
      this.selectedPriceRange = [
        Math.max(this.priceRange[0], this.selectedPriceRange[0]),
        Math.min(this.priceRange[1], this.selectedPriceRange[1]),
      ];
    },
    // Método para aplicar el filtro
    applyFilter() {
      // Emitir el evento con el rango de precios seleccionado
      this.$emit('filter-products', this.selectedPriceRange);
    },
    applyStatusFilters() {
      // Emitir un evento con los filtros actualizados
      this.$emit("filter-products-status", this.filters);
    },
    async loadAllCategoriesData() {
      this.$root.isLoading = true; // Activar el loader

      try {
        // Obtener los detalles de la categoría por su path
        const categories = await api.getAllCategories();
        // Agregar el campo `isSelected` a cada categoría
        this.categories = categories.map((cat) => ({
          ...cat,
          isSelected: false, // Inicialmente, ninguna categoría está activa
        }));
      } catch (error) {
        console.error("❌ Error al cargar la categoría:", error);
        this.notificationStore.showNotification(
            error.message || "Error al cargar la categoría",
            "error"
        );
      } finally {
        this.$root.isLoading = false; // Desactivar el loader
      }
    },
    // Método para marcar la categoría que coincide con this.category
    markMatchedCategory() {
      this.categories = this.categories.map((cat) => ({
        ...cat,
        isSelected: cat.id === this.category.id, // Marcar la categoría que coincide
      }));
    },
    // Método para actualizar la categoría seleccionada
    updateSelectedCategory() {
      this.categories = this.categories.map((cat) => ({
        ...cat,
        isSelected: cat.id === this.category.id, // Marcar la categoría que coincide
      }));
    },
    // Método para cambiar la categoría seleccionada
    async toggleCategory(category) {
      this.$root.isLoading = true; // Activar el loader

      try {
        // Desmarcar todas las categorías
        this.categories = this.categories.map((cat) => ({
          ...cat,
          isSelected: false,
        }));

        // Marcar la categoría seleccionada
        category.isSelected = true;

        // Navegar a la ruta de la nueva categoría
        this.$router.push({
          name: "CategoryPage", // Nombre de la ruta
          params: { path: category.path }, // Parámetro dinámico (path)
        });
      } catch (error) {
        console.error("❌ Error al cambiar de categoría:", error);
        this.notificationStore.showNotification(
            error.message || "Error al cambiar de categoría",
            "error"
        );
      } finally {
        this.$root.isLoading = false; // Desactivar el loader
      }
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
/* Estilos personalizados para el Slider */
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