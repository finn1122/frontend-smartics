<template>
  <div id="app">
    <AppHeader />
    <AppNotifications />
    <SliderApp/>
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
}
</script>

<style>
/* Estilos globales */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
