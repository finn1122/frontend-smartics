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
    <ProductFilters/>
    <ProductList/>
  </section>

  <div>
    <h1>{{ categoryName }}</h1>
    <p>{{ categoryDescription }}</p>
    <!-- Mostrar los productos -->
    <div v-if="products.length > 0">
      <div v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>Precio: ${{ product.price }}</p>
        <p v-if="product.isAvailable">Disponible</p>
        <p v-else>Agotado</p>
      </div>
    </div>
    <div v-else>
      <p>No hay productos disponibles.</p>
    </div>
  </div>
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
row>* {
  flex-shrink: 0;
  margin-top: var(--bs-gutter-y);
  max-width: 100%;
  padding-left: calc(var(--bs-gutter-x)* .5);
  padding-right: calc(var(--bs-gutter-x)* .5);
  width: 100%;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*, :after, :before {
  box-sizing: border-box;
}
div {
  display: block;
  unicode-bidi: isolate;
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*, :after, :before {
  box-sizing: border-box;
}
@media (min-width: 1200px) {
  .h3, h3 {
    font-size: 1.75rem;
  }
}
</style>