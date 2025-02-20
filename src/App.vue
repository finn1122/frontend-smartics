<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
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
