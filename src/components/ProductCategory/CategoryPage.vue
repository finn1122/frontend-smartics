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
export default {
  name: "CategoryPage",
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
/* Tus estilos aquí */
</style>