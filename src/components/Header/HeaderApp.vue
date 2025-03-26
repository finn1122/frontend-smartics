<template>
  <header>
    <div class="tp-header-area p-relative z-index-11">
      <HeaderMain v-if="!isSearchPage" />
      <HeaderBottom v-if="!isLoginPage && !isRegisterPage && !isProfilePage && !isCategoryPage && !isSearchPage" />
      <HeaderBottom2 v-if="isSearchPage"/>
    </div>
  </header>
</template>

<script>
import HeaderMain from "./HeaderMain";
import HeaderBottom from "@/components/Header/HeaderBottom.vue";
import HeaderBottom2 from "@/components/Header/HeaderBottom2.vue";

export default {
  name: 'HeaderApp', // Nombre del componente con más de una palabra

  components: {
    HeaderBottom,
    HeaderMain,
    HeaderBottom2
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
      return this.$route.path.startsWith("/categoria"); // Verifica si la ruta comienza con "/categoria/"
    },
    isSearchPage() {
      return this.$route.path.startsWith("/buscar"); // Verifica si la ruta comienza con "/categoria/"
    },
  },
};
</script>
