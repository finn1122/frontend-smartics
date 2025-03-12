<template>
  <header>
    <HeaderMain />
    <HeaderBottom v-if="!isLoginPage && !isRegisterPage && !isProfilePage && !isCategoryPage" />
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
    isRegisterPage() {
      return this.$route.path === "/register";
    },
    isProfilePage() {
      return this.$route.path === "/profile";
    },
    isCategoryPage() {
      return this.$route.path.startsWith("/categoria/"); // Verifica si la ruta comienza con "/categoria/"
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para el header */
</style>