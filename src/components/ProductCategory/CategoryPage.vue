<template>
  <section class="breadcrumb__area include-bg pt-100 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <h3 class="breadcrumb__title">{{ categoryName }}</h3>
            <div class="breadcrumb__list">
              <span><a href="/" class="">Home</a></span>
              <span>{{ categoryName }}</span>
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
        <div class="col-xl-9 col-lg-8">
          <ProductList :products="products" :categoryName="categoryName" />
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import ProductFilters from "@/components/Product/ProductFilters.vue";
import ProductList from "@/components/Product/ProductList.vue";

export default {
  name: "CategoryPage",
  components: {ProductList, ProductFilters},
  props: {
    categoryName: {
      type: String,
      required: true,
    },
    categoryDescription: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
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