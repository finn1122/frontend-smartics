<template>
  <section class="tp-product-area pb-55">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-5 col-lg-6 col-md-5">
          <div class="tp-section-title-wrapper mb-40">
            <h3 class="tp-section-title">
              {{ categoryLabels[activeTab] || 'Productos' }}
              <svg width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 30 C10 20, 30 10, 60 15 C90 20, 100 10, 113 5" stroke="#B2DFDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </h3>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-7">
          <div class="tp-product-tab tp-product-tab-border mb-45 tp-tab d-flex justify-content-md-end">
            <ul class="nav nav-tabs justify-content-sm-end" id="productTab">
              <!-- Botones dinámicos del menú -->
              <li class="nav-item" v-for="path in categoryPaths" :key="path">
                <button
                    class="nav-link"
                    :class="{ active: activeTab === path }"
                    @click="setActiveTab(path)"
                >
                  {{ categoryLabels[path] || path }}
                  <span class="tp-product-tab-line" v-if="activeTab === path">
                    <svg width="52" height="13" viewBox="0 0 52 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635" stroke="#B2DFDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-product-tab-content">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-sm-6" v-for="product in filteredProducts" :key="product.id">
                <ProductItem :category="categories[activeTab]" :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from '@/components/Product/ProductItem.vue';
import api from "@/services/api";
import { useNotificationStore } from '@/stores/notificationStore'; // Importar el store de notificaciones

export default {
  name: 'TrendingSection',
  components: {
    ProductItem,
  },
  data() {
    return {
      activeTab: 'nuevos', // Pestaña activa por defecto (debe coincidir con un valor en categoryPaths)
      categoryPaths: ['tendencias','nuevos'], // Lista de categorías
      categories: {}, // Almacenar categorías dinámicamente
      products: {}, // Almacenar productos dinámicamente
      categoryLabels: { // Mapeo de nombres amigables para las categorías
        tendencias: 'Tendencias',
        nuevos: 'Productos recien llegados',
      },
    };
  },
  computed: {
    filteredProducts() {
      // Acceder dinámicamente a los productos basados en activeTab
      return this.products[this.activeTab] || [];
    },
  },
  async created() {
    await this.loadCategoriesAndProducts();
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab; // Cambiar la pestaña activa
    },
    async loadCategoriesAndProducts() {
      this.$root.isLoading = true; // Activar el loader
      const notificationStore = useNotificationStore(); // Usar el store de notificaciones

      try {
        for (const path of this.categoryPaths) {
          // Obtener la categoría por su path
          const category = await api.getCategoryByPath(path);
          this.categories[path] = category;

          // Obtener los productos de la categoría
          const products = await api.getProductsByCategory(category.id);
          this.products[path] = products; // Almacenar los productos dinámicamente
        }
      } catch (error) {
        console.error("❌ Error al cargar categorías y productos:", error);
        notificationStore.showNotification( // Usar notificationStore
            error.message || "Error al cargar la categoría",
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
/* Estilos generales para los productos */
.tp-product-area {
  margin-bottom: 3rem;
}

.tp-product-thumb img {
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.tp-product-item:hover .tp-product-action {
  right: 10px;
  opacity: 1;
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

.tp-product-tab-content {
  margin-top: 3rem;
}

.tp-section-title {
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.tp-section-title svg {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}
</style>