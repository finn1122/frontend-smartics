<template>
    <CommonBreadcrumb
        :title="category?.name"
        home-text="Home"
    >
      <template #breadcrumb-items>
        <span>{{ category?.name }}</span>
      </template>
    </CommonBreadcrumb>
    <div class="container mt-5">
      <div class="row">
        <!-- Filtros (3 columnas) -->
        <div class="col-xl-3 col-lg-4">
          <ProductFilters
              :category="category"
              :products="products"
              :priceRange="priceRange"
              @filter-products="filterProductsByPrice"
              @filter-products-status="filterProductsByStatus"
          />
        </div>
        <!-- Lista de Productos (9 columnas) -->
        <div  v-if="products && category" class="col-xl-9 col-lg-8 mb-4">
          <ProductViewSelector :category="category" :products="filteredProducts" />
        </div>
      </div>
    </div>
</template>

<script>
import ProductFilters from "@/components/products/ProductsFilters.vue";
import ProductViewSelector from "@/components/products/ProductsViewSelector.vue";
import api from "@/services/api"; // Importar la instancia de API
import { useNotificationStore } from "@/stores/notificationStore";
import CommonBreadcrumb from "@/components/common/CommonBreadcrumb.vue";
import { useLoaderStore } from '@/stores/loaderStore'


export default {
  name: "CategoryPage",
  components: {CommonBreadcrumb, ProductViewSelector, ProductFilters },
  setup() {
    const notificationStore = useNotificationStore();
    return { notificationStore };
  },
  data() {
    return {
      category: [],
      products: [], // Lista completa de productos
      filteredProducts: [], // Lista de productos filtrados
      priceRange: [0, 0], // Rango de precios dinámico (filtro independiente)
      activeFilters: {}, // Filtros activos (se llena dinámicamente)
      loader: useLoaderStore()

    };
  },
  computed: {
    // Obtener el path de la categoría desde los parámetros de la ruta
    categoryPath() {
      return this.$route.params.path;
    },
  },
  watch: {
    // Observar cambios en el path de la categoría
    categoryPath: {
      immediate: true, // Ejecutar el watcher inmediatamente al montar el componente
      handler: "loadCategoryData", // Llamar a loadCategoryData cuando cambie el path
    },
  },
  async created() {
    await this.loadCategoryData();
  },
  methods: {
    async loadCategoryData() {
      this.loader.show() // Activar el loader

      try {
        // Obtener los detalles de la categoría por su path
        this.category = await api.getCategoryByPath(this.categoryPath);
        // Obtener los productos de la categoría
        await this.fetchProductsForCategory(this.category.id);
      } catch (error) {
        console.error("❌ Error al cargar la categoría:", error);
        this.notificationStore.showNotification(
            error.message || "Error al cargar la categoría",
            "error"
        );
      } finally {
        this.loader.hide() // Desactivar el loader
      }
    },
    async fetchProductsForCategory(categoryId) {
      try {
        this.loader.show() // Desactivar el loader
        this.products = await api.getProductsByCategory(categoryId);
        this.filteredProducts = this.products; // Inicializar los productos filtrados
        this.calculatePriceRange(); // Calcular el rango de precios
      } catch (error) {
        console.error("❌ Error al cargar los productos:", error);
        throw new Error(error.response?.data?.message || "Error al cargar los productos");
      } finally {
        this.loader.hide() // Desactivar el loader
      }
    },
    // Método para calcular el rango de precios
    calculatePriceRange() {
      if (this.products.length === 0) {
        this.priceRange = [0, 0]; // Si no hay productos, el rango es [0, 0]
        return;
      }

      // Obtener los precios de los productos
      const prices = this.products.map((product) => {
        return product.bestPrice?.newSalePrice || product.bestPrice?.salePrice || 0;
      });

      // Calcular el mínimo y máximo
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      // Establecer el rango de precios
      this.priceRange = [minPrice, maxPrice];
    },
    // Método para filtrar los productos por precio
    filterProductsByPrice(priceRange) {
      this.priceRange = priceRange; // Actualizar el filtro de precio (independiente)
      this.applyAllFilters(); // Aplicar todos los filtros
    },
    // Método para filtrar los productos por estado (In Stock)
    filterProductsByStatus(status) {
      this.activeFilters.inStock = status.inStock; // Agregar o actualizar el filtro "In Stock"
      this.applyAllFilters(); // Aplicar todos los filtros
    },
    // Método para aplicar todos los filtros acumulativamente
    applyAllFilters() {
      this.filteredProducts = this.products.filter((product) => {
        // Aplicar el filtro "In Stock" (si existe)
        if (this.activeFilters.inStock && product.bestPrice.quantity <= 0) {
          return false; // Excluir productos que no están en stock
        }

        // Aplicar el filtro de rango de precios (si existe)
        if (this.priceRange) {
          const price = product.bestPrice?.newSalePrice || product.bestPrice?.salePrice || 0;
          if (price < this.priceRange[0] || price > this.priceRange[1]) {
            return false; // Excluir productos fuera del rango de precios
          }
        }

        // Aquí puedes agregar más condiciones para otros filtros dinámicos
        // Ejemplo: if (this.activeFilters.nuevoFiltro && !product.cumpleCondicion) { return false; }

        return true; // Incluir productos que cumplen con todos los filtros
      });
    },
  },
};
</script>
<style scoped>
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