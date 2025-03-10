<template>
  <div id="app">
    <AppLoader :isLoading="isLoading" />
    <AppHeader />
    <AppNotifications />
    <SliderApp v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <ProductCategory
        v-if="!isLoginPage && !isRegisterPage && !isProfilePage"
        :categories="categories ?? null"
    />
    <FeatureSection v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <TrendingSection v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/header/HeaderApp.vue';
import AppNotifications from '@/components/AppNotifications.vue';
import SliderApp from "@/components/slider/SliderApp.vue";
import ProductCategory from "@/components/ProductCategory/ProductCategory.vue";
import FeatureSection from "@/components/Feature/FeatureSection.vue";
import TrendingSection from "@/components/Trending/TrendingSection.vue";
import api from '@/services/api';

export default {
  name: 'App',
  components: {
    TrendingSection,
    FeatureSection,
    SliderApp,
    AppHeader,AppNotifications,
    ProductCategory,
  },
  data() {
    return {
      categories: [],
      isLoading: false,
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
      this.isLoading = true; // Activa el loader

      try {
        const response = await api.getTopCategories(); // Llama a la función login
        if(response.length > 0) {
          this.categories = response;
        }
      } catch (error) {
        // Error inesperado
        this.notificationStore.showNotification(error.message || "Error inesperado", "error");
      } finally {
        this.isLoading = false; // Desactiva el loader
      }
    },

  }
}
</script>

<style>
/* Estilos globales */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
