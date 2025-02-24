<template>
  <div id="app">
    <AppHeader />
    <AppNotifications /> <!-- Asegúrate de que esté aquí -->
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
}
</script>

<style>
/* Estilos globales */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
