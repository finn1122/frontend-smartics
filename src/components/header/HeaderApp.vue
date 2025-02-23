<template>
  <header>
    <HeaderMain />
    <HeaderBottom v-if="!isLoginPage" />
  </header>
</template>

<script>
import HeaderMain from "./HeaderMain";
import HeaderBottom from "./HeaderBottom";

export default {
  name: 'HeaderApp', // Nombre del componente con más de una palabra

  components: {
    HeaderMain,
    HeaderBottom,
  },
  computed: {
    // Verifica si la ruta actual es '/login'
    isLoginPage() {
      return this.$route.path === "/login";
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el header */
</style>