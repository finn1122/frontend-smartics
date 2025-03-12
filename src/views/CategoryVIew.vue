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
          imageUrl: "https://via.placeholder.com/150",
          path: "sillas-gamer",
          top: true,
          active: true,
          productsCount: 3, // Número de productos en esta categoría
        };

        // Datos de prueba para los productos
        const productsData = [
          {
            id: 1,
            name: "Silla Gamer Pro",
            description: "Silla ergonómica con soporte lumbar.",
            price: 299.99,
            imageUrl: "https://via.placeholder.com/150",
            stock: 10,
            isAvailable: true,
          },
          {
            id: 2,
            name: "Silla Gamer Elite",
            description: "Silla premium con reposapiés integrado.",
            price: 499.99,
            imageUrl: "https://via.placeholder.com/150",
            stock: 5,
            isAvailable: true,
          },
          {
            id: 3,
            name: "Silla Gamer Basic",
            description: "Silla económica para gamers casuales.",
            price: 199.99,
            imageUrl: "https://via.placeholder.com/150",
            stock: 0,
            isAvailable: false,
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