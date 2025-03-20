<template>
  <section class="breadcrumb__area include-bg pt-100 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <!-- Mostrar el nombre de la categoría -->
            <h3 class="breadcrumb__title">{{ category?.name }}</h3>
            <div class="breadcrumb__list">
              <span><a href="/" class="">Home</a></span>
              <span>{{ category?.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <!-- Filtros (3 columnas) -->
        <div class="col-xl-3 col-lg-4">
          <ProductFilters />
        </div>
        <!-- Lista de Productos (9 columnas) -->
        <div  v-if="products && category" class="col-xl-9 col-lg-8">
          <ProductViewSelector :category="category" :products="products" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductFilters from "@/components/Product/ProductFilters.vue";
import ProductViewSelector from "@/components/Product/ProductViewSelector.vue";
import api from "@/services/api"; // Importar la instancia de API

export default {
  name: "CategoryPage",
  components: { ProductViewSelector, ProductFilters },
  data() {
    return {
      category: [],
      products: [],
    };
  },
  computed: {
    // Obtener el path de la categoría desde los parámetros de la ruta
    categoryPath() {
      return this.$route.params.path;
    },
  },
  async created() {
    await this.loadCategoryData();
    // Obtener los productos de la categoría (si es necesario)
    await this.fetchProductsForCategory(this.category.id);
  },
  methods: {
    async loadCategoryData() {
      this.$root.isLoading = true; // Activar el loader

      try {
        // Obtener los detalles de la categoría por su path
        this.category = await api.getCategoryByPath(this.categoryPath);
      } catch (error) {
        console.error("❌ Error al cargar la categoría:", error);
        this.$root.notificationStore.showNotification(
            error.message || "Error al cargar la categoría",
            "error"
        );
      } finally {
        this.$root.isLoading = false; // Desactivar el loader
      }
    },
    async fetchProductsForCategory(categoryId) {
      try {
        this.$root.isLoading = true; // Desactivar el loader
        this.products = await api.getProductsByCategory(categoryId);
      } catch (error) {
        console.error("❌ Error al cargar los productos:", error);
        throw new Error(error.response?.data?.message || "Error al cargar los productos");
      }
      finally {
        this.$root.isLoading = false; // Desactivar el loader
      }
    },
  },
};
</script>

<style scoped>
.breadcrumb__area {
  margin-top: 6rem;
}
.breadcrumb__title {
  font-size: 44px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 6px;
}

h3 {
  font-size: 28px;
}
.breadcrumb__list span:not(:last-child)::after {
  content: ""; /* Asegúrate de que el pseudo-elemento tenga contenido */
  display: inline-block; /* Hacer que el pseudo-elemento sea visible */
  width: 4px; /* Ancho del separador */
  height: 4px; /* Alto del separador */
  background-color: #a8acb0; /* Color del separador */
  border-radius: 50%; /* Hacerlo circular */
  margin-left: 8px; /* Espacio a la izquierda del separador */
  margin-right: 8px; /* Espacio a la derecha del separador */
  vertical-align: middle; /* Alinear verticalmente con el texto */
}
.breadcrumb__list span {
  font-size: 16px;
  font-weight: 400;
  position: relative;

}
a {
  color: inherit;
  text-decoration: none;
}

@media (min-width: 1200px) {
  .h3, h3 {
    font-size: 1.75rem;
  }
}

</style>