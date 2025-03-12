<template>
  <div>
    <h1>{{ categoryName }}</h1>
    <p>{{ categoryDescription }}</p>
    <!-- Aquí puedes mostrar los productos de la categoría -->
  </div>
</template>

<script>
export default {
  name: "CategoryView",
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
  async created() {
    await this.fetchCategoryData();
  },
  methods: {
    async fetchCategoryData() {
      try {
        const response = await this.$api.getCategoryBySlug(this.slug); // Llama a la API
        this.categoryName = response.name;
        this.categoryDescription = response.description;
        this.products = response.products;
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
  }
}
</script>