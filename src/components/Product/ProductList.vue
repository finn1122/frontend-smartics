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
                  <button class="nav-link active">
                    <font-awesome-icon :icon="['fas', 'th-large']" />
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link">
                    <font-awesome-icon :icon="['fas', 'bars']" />
                  </button>
                </li>
              </ul>
            </div>
            <!-- Contador de resultados -->
            <div class="tp-shop-top-result">
              <p>Showing 1–3 of {{ products.length }} results</p>
            </div>
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

    <!-- Lista de Productos -->
    <div class="tp-shop-items-wrapper tp-shop-item-primary">
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-xl-4 col-md-6 col-sm-6 mb-40">
          <!-- Usar el componente ProductItem -->
          <ProductItem :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from './ProductItem.vue'; // Asegúrate de que la ruta sea correcta

export default {
  name: 'ProductList',
  components: {
    ProductItem, // Registrar el componente
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      products: {
        type: Object
      },
    }
  },
  async created() {},
  methods: {}
};
</script>

<style scoped>
/* Estilos personalizados para tp-shop-top-left */
.tp-shop-top-left {
  display: flex !important;
  align-items: center !important;
  gap: 20px;

}

.tp-shop-top-result p {
  color: #818487;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0;
}

p {
  color: var(--tp-text-body);
  font-family: "Jost", sans-serif, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 15px;
}

.tp-shop-top-select .nice-select {
  background-color: #f9f9f9;
  border: 1px solid rgba(1, 15, 28, 0.1) !important;
  border-radius: 0 !important;
  color: var(--tp-common-black) !important;
  display: inline-block !important;
  float: none !important;
  font-size: 14px !important;
  height: 40px !important;
  line-height: 38px !important;
  min-width: 204px !important;
  padding: 0 25px !important;
}
.tp-shop-items-wrapper {
  position: relative;
  margin-top: 1.5rem;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex
;
  flex-wrap: wrap;
  margin-left: calc(var(--bs-gutter-x)* -.5);
  margin-right: calc(var(--bs-gutter-x)* -.5);
  margin-top: calc(var(--bs-gutter-y)* -1);
}
</style>