<template>
  <div class="search-results-container">
    <h2 v-if="search">Resultados para: "{{ search }}"</h2>

    <div class="product-grid">
      <ProductGridItem
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          :category="category"
      />
    </div>

    <div v-if="!filteredProducts.length" class="no-results">
      No se encontraron productos
    </div>
  </div>
</template>

<script>
import ProductGridItem from '@/components/Product/ProductGridItem.vue';
import api from '@/services/api';
import {useNotificationStore} from "@/stores/notificationStore";

export default {
  name: "SearchResults",
  components: { ProductGridItem },
  setup() {
    const notificationStore = useNotificationStore();
    return { notificationStore };
  },
  data() {
    return {
      filteredProducts: [],
      allCategories: [],
      isLoading: false,
      error: null,
      category: []
    };
  },
  props: {
    path: String,    // Recibido de la ruta (path de categoría)
    search: String   // Recibido del query param (término de búsqueda)
  },
  watch: {
    '$route': {
      handler(to, from) {
        if (to.query.search !== from?.query?.search || to.params.path !== from?.params?.path) {
          this.executeSearch();
        }
      },
      immediate: true
    }
  },
  async created() {
    await this.loadCategoryData();
  },
  methods: {
    async executeSearch() {
      this.isLoading = true;
      this.error = null;

      try {
        console.log('Parámetros recibidos:', {
          path: this.path,
          search: this.search,
          routeQuery: this.$route.query // Verifica lo que realmente llega
        });

        if (!this.path && !this.$route.query.search) {
          this.filteredProducts = [];
          return;
        }

        const params = {
          path: this.path || '',
          term: this.$route.query.search || '' // Usa directamente el query de la ruta
        };

        const response = await api.searchProducts(params);
        this.filteredProducts = response || [];

      } catch (error) {
        console.error("Error en búsqueda:", error);
        this.error = error.message || "Error al buscar productos";
      } finally {
        this.isLoading = false;
      }
    },
    async loadCategoryData() {
      this.$root.isLoading = true; // Activar el loader
      console.log(this.path)
      try {
        // Obtener los detalles de la categoría por su path
        this.category = await api.getCategoryByPath(this.path);
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
  }
};
</script>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.no-results {
  padding: 40px;
  text-align: center;
  font-size: 1.2rem;
}
</style>