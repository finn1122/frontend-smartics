<template>
  <div class="tp-shop-main-wrapper">
    <div class="search-results-container">
      <CommonBreadcrumb
          :title="search ? `Results for: '${search}'` : 'Search products'"
          home-text="Search Products"
      >
        <template #breadcrumb-items>
          <span v-if="category?.name">{{ category.name }}</span>
          <span v-else>Results</span>
        </template>
      </CommonBreadcrumb>

      <!-- Shop Area Section -->
      <section class="tp-shop-area pb-120">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="tp-shop-main-wrapper">
                <!-- Top Bar with Results Count and Sorting -->
                <div class="tp-shop-top mb-45">
                  <div class="row">
                    <div class="col-xl-6">
                      <div class="tp-shop-top-left d-flex align-items-center">
                        <!--<ViewToggle
                            :view="currentView"
                            @view-changed="handleViewChange"
                        />-->
                        <ResultsCounter :total="filteredProducts.length" />
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="tp-shop-top-select text-md-end">
                        <SortDropdown
                            :selected-option="currentSort"
                            @option-changed="handleSortChange"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- products Grid -->
                <div class="tp-shop-items-wrapper tp-shop-item-primary">
                  <div>
                    <!-- Vista de cuadrícula -->
                    <div v-if="currentView === 'grid'" class="row infinite-container">
                      <div
                          class="col-xl-4 col-md-6 col-sm-6 mb-40"
                          v-for="product in sortedProducts"
                          :key="product.id"
                      >
                        <ProductGridItem :product="product" :category="category" />
                      </div>
                    </div>

                    <!-- Vista de lista -->
                    <div v-if="currentView === 'list'" class="row">
                      <div class="col-xl-12">
                        <ProductListRow
                            v-for="product in sortedProducts"
                            :key="product.id"
                            :product="product"
                            :category="category"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- End of products Message -->
                <div class="text-center" v-if="filteredProducts.length > 0">
                  <p class="btn-loadmore-text">End Of Products</p>
                </div>

                <!-- No Results Message -->
                <div v-if="filteredProducts.length === 0" class="text-center py-5">
                  <p class="no-results-message">No products found matching your criteria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import ProductGridItem from '@/components/products/ProductsGridItem.vue';
import ProductListRow from '@/components/products/ProductsListRow.vue';
import api from '@/services/api';
import { useNotificationStore } from "@/stores/notificationStore";
import CommonBreadcrumb from "@/components/common/CommonBreadcrumb.vue";
import ResultsCounter from "@/components/common/ResultsCounter.vue";
import SortDropdown from "@/components/common/SortDropdown.vue";

export default {
  name: "SearchResults",
  components: {
    CommonBreadcrumb,
    ProductGridItem,
    ProductListRow,
    ResultsCounter,
    SortDropdown
  },
  setup() {
    const notificationStore = useNotificationStore();
    return { notificationStore };
  },
  data() {
    return {
      filteredProducts: [],
      sortedProducts: [],
      allCategories: [],
      error: null,
      category: [],
      currentView: 'grid',
      currentSort: 'default', // Usamos currentSort consistentemente
    };
  },
  props: {
    path: String,
    search: String
  },
  watch: {
    '$route': {
      handler(to, from) {
        if (to.query.search !== from?.query?.search || to.params.path !== from?.params?.path) {
          this.executeSearch();
        }
      },
      immediate: true
    },
    filteredProducts: {
      handler() {
        this.sortProducts();
      },
      immediate: true
    },
    currentSort() { // Cambiado a currentSort para consistencia
      this.sortProducts();
    }
  },
  async created() {
    await this.loadCategoryData();
  },
  methods: {
    async executeSearch() {
      this.$root.isLoading = true;
      this.error = null;

      try {
        if (!this.path && !this.$route.query.search) {
          this.filteredProducts = [];
          return;
        }

        const params = {
          path: this.path || '',
          term: this.$route.query.search || ''
        };

        const response = await api.searchProducts(params);
        this.filteredProducts = response || [];

      } catch (error) {
        console.error("Error en búsqueda:", error);
        this.error = error.message || "Error al buscar productos";
      } finally {
        this.$root.isLoading = false;
      }
    },

    async loadCategoryData() {
      this.$root.isLoading = true;
      try {
        this.category = await api.getCategoryByPath(this.path);
      } catch (error) {
        console.error("❌ Error al cargar la categoría:", error);
        this.notificationStore.showNotification(
            error.message || "Error al cargar la categoría",
            "error"
        );
      } finally {
        this.$root.isLoading = false;
      }
    },

    handleViewChange(view) {
      this.currentView = view;
    },

    handleSortChange(option) {
      this.currentSort = option; // Actualizamos currentSort en lugar de currentSortOption
    },

    sortProducts() {
      if (!this.filteredProducts.length) {
        this.sortedProducts = [];
        return;
      }

      const productsCopy = [...this.filteredProducts];

      switch (this.currentSort) { // Usamos currentSort aquí
        case 'low-to-high':
          this.sortedProducts = productsCopy.sort((a, b) => {
            const priceA = a.bestPrice?.newSalePrice || a.bestPrice?.salePrice || 0;
            const priceB = b.bestPrice?.newSalePrice || b.bestPrice?.salePrice || 0;
            return priceA - priceB;
          });
          break;

        case 'high-to-low':
          this.sortedProducts = productsCopy.sort((a, b) => {
            const priceA = a.bestPrice?.newSalePrice || a.bestPrice?.salePrice || 0;
            const priceB = b.bestPrice?.newSalePrice || b.bestPrice?.salePrice || 0;
            return priceB - priceA;
          });
          break;

        default:
          this.sortedProducts = productsCopy;
      }
    }
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
.breadcrumb__title {
  font-size: 44px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 6px;
}
</style>