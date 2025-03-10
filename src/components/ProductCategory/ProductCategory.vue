<template>
  <section class="tp-product-category d-flex align-items-center justify-content-center pt-60 pb-15">
    <div class="container">
      <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
        <div class="col" v-for="(category, index) in displayedCategories" :key="index">
          <div class="tp-product-category-item text-center mb-40">
            <div class="tp-product-category-thumb fix">
              <a class="cursor-pointer">
                <img :src="category.imageUrl" :alt="category.name">
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
      required: false,
      default: () => [], // Define un valor por defecto
    }
  },
  data() {
    return {
      // Categorías por defecto
      defaultCategories: [
        {
          name: 'Headphones',
          imageUrl: 'https://i.ibb.co/sVxYFDY/product-cat-1.png',
          productCount: 3
        },
        {
          name: 'Mobile Tablets',
          imageUrl: 'https://i.ibb.co/xHFpQTV/product-cat-2.png',
          productCount: 3
        },
        {
          name: 'CPU Heat Pipes',
          imageUrl: 'https://i.ibb.co/S0GjZdp/product-cat-3.png',
          productCount: 2
        },
        {
          name: 'Smart Watch',
          imageUrl: 'https://i.ibb.co/g3YK8H2/product-cat-4.png',
          productCount: 3
        },
        {
          name: 'Bluetooth',
          imageUrl: 'https://i.ibb.co/D9qfYWX/product-cat-5.png',
          productCount: 2
        }
      ],
    };
  },
  computed: {
    // Usar categorías proporcionadas o las categorías por defecto
    displayedCategories() {
      return this.categories.length > 0 ? this.categories : this.defaultCategories;
    }
  },
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

/* Estilos específicos del componente */
.tp-product-category {
  padding-top: 60px;
  padding-bottom: 15px;
  margin-bottom: 3rem;
}

.tp-product-category-thumb {
  margin-bottom: 16px;
}

.tp-product-category-thumb a {
  align-items: center;
  background-color: #f6f7f9;
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

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--bs-gutter-x) * -.5);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-top: calc(var(--bs-gutter-y) * -1);
}
</style>