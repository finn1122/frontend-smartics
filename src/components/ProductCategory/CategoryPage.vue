<template>
  <div>
    <h1>{{ categoryName }}</h1>
    <p>{{ categoryDescription }}</p>
    <!-- Aquí puedes mostrar los productos de la categoría -->
  </div>
</template>

<script>
export default {
  name: "CategoryPage",
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      categoryName: '',
      categoryDescription: '',
      products: []
    };
  },
  created() {
    this.fetchCategoryData();
  },
  methods: {
    async fetchCategoryData() {
      // Simula una llamada a la API para obtener los datos de la categoría
      const response = await fetch(`/api/categories/${this.slug}`);
      const data = await response.json();

      this.categoryName = data.name;
      this.categoryDescription = data.description;
      this.products = data.products;
    }
  }
}
</script>