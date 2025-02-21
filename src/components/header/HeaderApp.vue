<template>
  <header>
    <HeaderMain />
    <HeaderBottom />
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
};
</script>

<style scoped>
/* Estilos específicos para el header */
</style>