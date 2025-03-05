<template>
  <div id="app">
    <AppHeader />
    <AppNotifications />
    <SliderApp v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <ProductCategory
        v-if="!isLoginPage && !isRegisterPage && !isProfilePage"
        :categories="categories"
    />
    <FeatureSection />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/header/HeaderApp.vue';
import AppNotifications from '@/components/AppNotifications.vue';
import SliderApp from "@/components/slider/SliderApp.vue";
import ProductCategory from "@/components/ProductCategory/ProductCategory.vue";
import FeatureSection from "@/components/Feature/FeatureSection.vue";

export default {
  name: 'App',
  components: {
    FeatureSection,
    SliderApp,
    AppHeader,AppNotifications,
    ProductCategory,
  },
  data() {
    return {
      categories: [
        {
          name: 'Headphones',
          image: 'https://i.ibb.co/sVxYFDY/product-cat-1.png',
          productCount: 3
        },
        {
          name: 'Mobile Tablets',
          image: 'https://i.ibb.co/xHFpQTV/product-cat-2.png',
          productCount: 3
        },
        {
          name: 'CPU Heat Pipes',
          image: 'https://i.ibb.co/S0GjZdp/product-cat-3.png',
          productCount: 2
        },
        {
          name: 'Smart Watch',
          image: 'https://i.ibb.co/g3YK8H2/product-cat-4.png',
          productCount: 3
        },
        {
          name: 'Bluetooth',
          image: 'https://i.ibb.co/D9qfYWX/product-cat-5.png',
          productCount: 2
        }
      ]
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
}
</script>

<style>
/* Estilos globales */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
