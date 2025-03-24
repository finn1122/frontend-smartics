<template>
  <header>
    <div class="tp-header-area p-relative z-index-11">
      <HeaderMain />
      <HeaderBottom v-if="!isLoginPage && !isRegisterPage && !isProfilePage && !isCategoryPage" />
    </div>
  </header>
</template>

<script>
import HeaderMain from "./HeaderMain";
import HeaderBottom from "@/components/Header/HeaderBottom.vue";

export default {
  name: 'HeaderApp', // Nombre del componente con más de una palabra

  components: {
    HeaderBottom,
    HeaderMain,
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
      return this.$route.path === "/Profile";
    },
    isCategoryPage() {
      return this.$route.path.startsWith("/categoria/"); // Verifica si la ruta comienza con "/categoria/"
    },
  },
};
</script>
<style>

.p-relative {
  position: relative;
}
.z-index-11 {
  z-index: 11;
}
</style>