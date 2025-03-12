<template>
  <div id="app">
    <AppLoader :isLoading="isLoading" />
    <AppHeader />
    <AppNotifications />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/header/HeaderApp.vue';
import AppNotifications from '@/components/AppNotifications.vue';
import AppLoader from "@/components/AppLoader.vue";

export default {
  name: 'App',
  components: {
    AppLoader,AppHeader,AppNotifications
  },
  data() {
    return {
      categories: [],
      isLoading: false,
    };
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
