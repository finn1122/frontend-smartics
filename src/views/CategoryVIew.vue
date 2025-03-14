<template>
  <div>
    <!-- Mostrar el componente CategoryPage -->
    <CategoryPage
        :categoryName="categoryName"
        :categoryDescription="categoryDescription"
        :products="products"
    />
  </div>
</template>

<script>
import CategoryPage from '@/components/ProductCategory/CategoryPage.vue'; // Asegúrate de que la ruta sea correcta

export default {
  name: "CategoryView",
  components: {
    CategoryPage, // Registra el componente
  },
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categoryName: "",
      categoryDescription: "",
      products: [],
    };
  },
  async created() {
    await this.fetchCategoryData(); // Llama a la función para obtener los datos
  },
  methods: {
    async fetchCategoryData() {
      try {
        // Simulación de datos de prueba para la categoría
        const categoryId = 1;
        if (!categoryId) {
          throw new Error("ID de categoría no proporcionado");
        }

        // Datos de prueba para la categoría
        const categoryData = {
          id: categoryId,
          name: "Sillas Gamer",
          description: "Las mejores sillas gamer para tu setup.",
          imageUrl: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
          path: "sillas-gamer",
          top: true,
          active: true,
          productsCount: 3, // Número de productos en esta categoría
        };

        // Datos de prueba para los productos
        const productsData = [
          {
            id: 1,
            link: "/product-details/1",
            image: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
            alt: "Product 1",
            badge: "New",
            category: "Electronics",
            title: "Smartphone X",
            rating: [1, 1, 1, 1, 0.5], // 4.5 estrellas
            reviews: 10,
            oldPrice: 499,
            newPrice: 399
          },
          {
            id: 2,
            link: "/product-details/1",
            image: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
            alt: "Product 1",
            badge: "New",
            category: "Electronics",
            title: "Smartphone X",
            rating: [1, 1, 1, 1, 0.5], // 4.5 estrellas
            reviews: 10,
            oldPrice: 499,
            newPrice: 399
          },
          {
            id: 3,
            link: "/product-details/1",
            image: "https://i.ibb.co/n1YRvWJ/headphone-5.png",
            alt: "Product 1",
            badge: "New",
            category: "Electronics",
            title: "Smartphone X",
            rating: [1, 1, 1, 1, 0.5], // 4.5 estrellas
            reviews: 10,
            oldPrice: 499,
            newPrice: 399
          },
        ];

        // Asignar los datos de prueba al estado del componente
        this.categoryName = categoryData.name;
        this.categoryDescription = categoryData.description;
        this.products = productsData;
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    },
  },
};
</script>