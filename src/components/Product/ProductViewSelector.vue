<template>
  <div class="tp-shop-main-wrapper">
    <!-- Controles de vista y ordenamiento -->
    <div class="tp-shop-top mb-5">
      <div class="row">
        <div class="col-xl-6">
          <div class="tp-shop-top-left d-flex align-items-center">
            <ViewToggle
                :view="view"
                @view-changed="handleViewChange"
            />

            <ResultsCounter
                :total="filteredProducts.length"
            />
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

    <!-- Lista de Productos -->
    <div v-if="filteredProducts.length > 0" class="tp-shop-items-wrapper tp-shop-item-primary">
      <!-- Vista de cuadrícula (grid) -->
      <div v-if="view === 'grid'" class="row">
        <div v-for="product in sortedProducts" :key="product.id" class="col-xl-4 col-md-6 col-sm-6 mb-40">
          <ProductGridItem
              :product="product"
              :category="category"
          />
        </div>
      </div>

      <!-- Vista de lista -->
      <div v-else class="tp-shop-items-wrapper tp-shop-item-primary">
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
import ViewToggle from "@/components/common/ViewToggle.vue";
import ResultsCounter from "@/components/common/ResultsCounter.vue";
import SortDropdown from "@/components/common/SortDropdown.vue";

export default {
  name: 'ProductViewSelector',

  components: {
    SortDropdown,
    ResultsCounter,
    ViewToggle,
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
      currentSort: "default", // Valor seleccionado para ordenamiento
      sortedProducts: [], // Lista de productos ordenados
    };
  },

  computed: {
    // Filtrar los productos que tienen bestPrice y category
    filteredProducts() {
      return this.products.filter(
          (product) => product && product.bestPrice && this.category
      );
    }
  },

  watch: {
    // Observar cambios en los productos filtrados para ordenarlos
    filteredProducts: {
      immediate: true,
      handler() {
        this.sortProducts();
      },
    },

    // Observar cambios en la opción de ordenamiento (CORREGIDO: currentSort en lugar de sortOption)
    currentSort() {
      this.sortProducts();
    }
  },

  methods: {
    // Manejar cambio de vista
    handleViewChange(view) {
      this.view = view;
    },

    // Manejar cambio de opción de ordenamiento
    handleSortChange(option) {
      this.currentSort = option; // CORREGIDO: Actualizar currentSort en lugar de sortOption
    },

    // Método para ordenar los productos según la opción seleccionada
    sortProducts() {
      if (!this.filteredProducts.length) {
        this.sortedProducts = [];
        return;
      }

      const productsCopy = [...this.filteredProducts];

      switch (this.currentSort) { // CORREGIDO: Usar currentSort en lugar de sortOption
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
<style>
.tp-shop-top {
  margin-bottom: 20px; /* Prueba con 0 o ajusta */
}

.tp-shop-top-result p {
  color: #818487;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
}

p {
  color: var(--tp-text-body);
  font-family: var(--tp-ff-p), sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 15px;
}

.tp-shop-top-tab .nav-tabs .nav-item .nav-link {
  border: 1px solid rgba(1, 15, 28, 0.1);
  border-radius: 0;
  color: #818487;
  display: inline-block;
  font-size: 18px;
  height: 40px;
  line-height: 38px;
  margin-right: 6px;
  text-align: center;
  width: 40px;
}

.tp-shop-top-tab .nav-tabs .nav-item .nav-link.active {
  border-color: var(--tp-common-black);
  color: var(--tp-common-black);
}

.tp-tab .nav-tabs,
.tp-tab .nav-tabs .nav-link {
  border: 0;
  margin: 0;
  padding: 0;
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  background-color: var(--bs-nav-tabs-link-active-bg);
  border-color: var(--bs-nav-tabs-link-active-border-color);
  color: var(--bs-nav-tabs-link-active-color);
}

.d-flex {
  display: flex !important;
}

.nice-select {
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height: 40px;
  outline: none;
  padding: 0 30px 0 18px;
  position: relative;
  text-align: left !important;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  width: auto;
}

[role="button"] {
  cursor: pointer;
}

.tp-shop-top .row,
.tp-shop-top-left,
.tp-shop-top-select {
  display: flex;
  align-items: center;
}

.tp-shop-top-select {
  justify-content: flex-end;
  min-height: 40px;
}

.tp-shop-top-select .nice-select {
  min-width: 200px;
  max-width: 250px;
  display: inline-block;
}

.tp-shop-top-select .nice-select:after {
  color: #767a7d;
  right: 20px;
}

.dropdown-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #767a7d; /* Color de la flecha */
  pointer-events: none;
  transition: transform 0.2s ease-in-out;
}

.nice-select.open .dropdown-icon {
  transform: translateY(-50%) rotate(180deg);
}

/* Estilos para el menú desplegable */
.nice-select .list {
  background-color: #fff; /* Fondo sólido */
  border: 1px solid #e8e8e8; /* Borde */
  border-radius: 5px; /* Bordes redondeados */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra */
  list-style: none;
  margin: 0;
  max-height: 200px; /* Altura máxima */
  overflow-y: auto; /* Scroll si hay muchas opciones */
  padding: 0;
  position: absolute;
  top: 100%; /* Posición debajo del select */
  left: 0;
  width: 100%;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
}

/* Estilos para las opciones del menú desplegable */
.nice-select .list .option {
  color: #333; /* Color del texto */
  cursor: pointer;
  font-size: 14px;
  padding: 8px 18px; /* Espaciado interno */
  transition: background-color 0.2s ease-in-out;
}

/* Estilo al pasar el ratón sobre una opción */
.nice-select .list .option:hover {
  background-color: #f5f5f5; /* Fondo al hacer hover */
}

/* Estilo para la opción seleccionada */
.nice-select .list .option.selected {
  background-color: #e8e8e8; /* Fondo de la opción seleccionada */
  font-weight: bold; /* Texto en negrita */
}

/* Estilo para la opción con foco */
.nice-select .list .option.focus {
  background-color: #f0f0f0; /* Fondo de la opción con foco */
}
</style>