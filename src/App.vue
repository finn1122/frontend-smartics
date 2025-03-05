<template>
  <div id="app">
    <AppHeader />
    <AppNotifications />
    <SliderApp v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/header/HeaderApp.vue';
import AppNotifications from '@/components/AppNotifications.vue';
import SliderApp from "@/components/slider/SliderApp.vue";

export default {
  name: 'App',
  components: {
    SliderApp,
    AppHeader,AppNotifications
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
