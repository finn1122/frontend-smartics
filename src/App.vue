<template>
  <div id="app">
    <AppLoader :isLoading="isLoading" />
    <AppHeader />
    <AppNotifications />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/header/HeaderApp.vue';
import AppNotifications from '@/components/AppNotifications.vue';
import AppLoader from "@/components/AppLoader.vue";
import { useLoaderStore } from '@/stores/loaderStore'

export default {
  name: 'App',
  components: {
    AppLoader,AppHeader,AppNotifications
  },
  computed: {
    isLoading() {
      return useLoaderStore().isLoading
    }
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
