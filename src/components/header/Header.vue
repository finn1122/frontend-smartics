<template>
  <header>
    <HeaderMain />
    <HeaderBottom />
  </header>
</template>

<script>
import HeaderMain from "./HeaderMain.vue";
import HeaderBottom from "./HeaderBottom.vue";

export default {
  components: {
    HeaderMain,
    HeaderBottom,
  },
};
</script>

<style scoped>
/* Estilos específicos para el header */
</style>