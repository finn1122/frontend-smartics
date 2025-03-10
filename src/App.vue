<template>
  <div id="app">
    <AppHeader />
    <AppNotifications />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/header/HeaderApp.vue';
import AppNotifications from '@/components/AppNotifications.vue';
export default {
  name: 'App',
  components: {
    AppHeader,AppNotifications
  },
  data() {
    return {
      categories: [],
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
