<template>
  <div class="tp-shop-main-wrapper">
    <div class="tp-shop-top mb-45">
      <div class="row">
        <div class="col-xl-6">
          <div class="tp-shop-top-left d-flex align-items-center">
            <!-- Pestañas -->
            <div class="tp-shop-top-tab tp-tab">
              <ul class="nav nav-tabs" id="productTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link" :class="{ active: view === 'grid' }" @click="view = 'grid'">
                    <font-awesome-icon :icon="['fas', 'th-large']" />
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" :class="{ active: view === 'list' }" @click="view = 'list'">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                  </button>
                </li>
              </ul>
            </div>
            <!-- Contador de resultados -->
            <div class="tp-shop-top-result">
              <p>Showing 1–{{ filteredProducts.length }} of {{ filteredProducts.length }} results</p>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="tp-shop-top-select text-end">
            <!-- Select para ordenar productos -->
            <select class="form-select" v-model="sortOption" @change="sortProducts">
              <option value="default">Default Sorting</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Lista de Productos -->
    <div v-if="filteredProducts.length > 0" class="tp-shop-items-wrapper tp-shop-item-primary">
      <!-- Vista de cuadrícula (grid) -->
      <div v-if="view === 'grid'" class="row">
        <div v-for="product in sortedProducts" :key="product.id" class="col-xl-4 col-md-6 col-sm-6 mb-40">
          <!-- Usar el componente ProductItem -->
          <ProductGridItem
              :product="product"
              :category="category"
          />
        </div>
      </div>

      <!-- Vista de lista -->
      <div v-if="view === 'list'" class="tp-shop-items-wrapper tp-shop-item-primary">
        <div class="row">
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

    <!-- Mensaje si no hay productos -->
    <div v-else class="tp-shop-items-wrapper tp-shop-item-primary">
      <p>No hay productos disponibles.</p>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'ProductViewSelector',
  components: {
    ProductGridItem: defineAsyncComponent(() =>
        import('./ProductGridItem.vue')
    ),
    ProductListRow: defineAsyncComponent(() =>
        import('./ProductListRow.vue')
    ),
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      view: 'grid', // Estado para controlar la vista actual (grid o list)
      sortOption: 'default', // Opción de ordenación seleccionada
      sortedProducts: [], // Lista de productos ordenados
    };
  },
  computed: {
    // Filtrar los productos que tienen bestPrice y category
    filteredProducts() {
      return this.products.filter(
          (product) => product && product.bestPrice && this.category
      );
    },
  },
  watch: {
    // Observar cambios en los productos filtrados para ordenarlos
    filteredProducts: {
      immediate: true,
      handler() {
        this.sortProducts();
      },
    },
  },
  methods: {
    // Método para ordenar los productos según la opción seleccionada
    sortProducts() {
      if (this.sortOption === 'low-to-high') {
        // Ordenar de menor a mayor precio
        this.sortedProducts = [...this.filteredProducts].sort((a, b) => {
          const priceA = a.bestPrice?.newSalePrice || a.bestPrice?.salePrice || 0;
          const priceB = b.bestPrice?.newSalePrice || b.bestPrice?.salePrice || 0;
          return priceA - priceB;
        });
      } else if (this.sortOption === 'high-to-low') {
        // Ordenar de mayor a menor precio
        this.sortedProducts = [...this.filteredProducts].sort((a, b) => {
          const priceA = a.bestPrice?.newSalePrice || a.bestPrice?.salePrice || 0;
          const priceB = b.bestPrice?.newSalePrice || b.bestPrice?.salePrice || 0;
          return priceB - priceA;
        });
      } else {
        // Orden por defecto (sin ordenar)
        this.sortedProducts = [...this.filteredProducts];
      }
    },
  },
};
</script>