<template>
  <section class="tp-product-category pt-60 pb-15">
    <div class="container">
      <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
        <div class="col" v-for="(category, index) in categories" :key="index">
          <div class="tp-product-category-item text-center mb-40">
            <div class="tp-product-category-thumb fix">
              <a class="cursor-pointer">
                <img :src="category.image" :alt="category.name">
              </a>
            </div>
            <div class="tp-product-category-content">
              <h3 class="tp-product-category-title">
                <a :href="category.link" class="cursor-pointer">{{ category.name }}</a>
              </h3>
              <p>{{ category.productCount }} Product</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductCategory",
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* Estilos globales */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, :after, :before {
  box-sizing: border-box;
}

/* Estilos para el contenedor */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Estilos para la sección de categorías */
.tp-product-category {
  padding-top: 60px;
  padding-bottom: 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra las columnas horizontalmente */
  margin-left: -15px;
  margin-right: -15px;
}

.col {
  flex: 0 0 auto;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.tp-product-category-item {
  text-align: center; /* Centra el contenido dentro de cada categoría */
}

.tp-product-category-thumb {
  margin-bottom: 16px;
}

.tp-product-category-thumb a {
  align-items: center;
  background-color: var(--tp-grey-1);
  background-image: radial-gradient(95.56% 95.56% at 50% 50%, #fff 0, #bddeff);
  border-radius: 50%;
  display: flex;
  height: 180px;
  justify-content: center;
  margin: auto;
  text-align: center;
  width: 180px;
}

@media only screen and (min-width: 768px) and (max-width: 991px),
only screen and (min-width: 992px) and (max-width: 1199px) {
  .tp-product-category-thumb a {
    height: 150px;
    width: 150px;
  }
}

.tp-product-category-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0;
}

.tp-product-category-title a {
  color: #000; /* Color negro para el enlace */
  text-decoration: none; /* Elimina el subrayado por defecto */
}

.tp-product-category-title a:hover {
  text-decoration: underline; /* Subrayado al hacer hover */
}

h3 {
  font-size: 28px;
}

.cursor-pointer, button:hover {
  cursor: pointer;
}

a, button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
  text-decoration: none;
}

a {
  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
}
</style>