<template>
  <div>
    <SliderApp v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <ProductCategory
        v-if="!isLoginPage && !isRegisterPage && !isProfilePage"
        :categories="categories ?? null"
    />
    <FeatureSection v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <TrendingSection v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
  </div>
</template>

<script>
import SliderApp from "@/components/slider/SliderApp.vue";
import ProductCategory from "@/components/ProductCategory/ProductCategory.vue";
import FeatureSection from "@/components/Feature/FeatureSection.vue";
import TrendingSection from "@/components/Trending/TrendingSection.vue";
import api from '@/services/api';

export default {
  name: 'HomeView',
  components: {
    SliderApp,
    ProductCategory,
    FeatureSection,
    TrendingSection,
  },
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    // Verifica si la ruta actual es '/login'
    isLoginPage() {
      return this.$route.path === "/login";
    },
    isRegisterPage() {
      return this.$route.path === "/register";
    },
    isProfilePage() {
      return this.$route.path === "/profile";
    },
  },
  async created() {
    await this.handleCategories();
  },
  methods: {
    async handleCategories() {
      this.$root.isLoading = true; // Accede al loader global en App.vue

      try {
        const response = await api.getTopCategories();
        if (response.length > 0) {
          this.categories = response;
        }
      } catch (error) {
        this.$root.notificationStore.showNotification(error.message || "Error inesperado", "error");
      } finally {
        this.$root.isLoading = false; // Desactiva el loader global
      }
    },
  },
};
</script>