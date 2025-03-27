<template>
  <header>
    <div class="tp-header-area p-relative z-index-11">
      <HeaderMain
          v-if="!isSearchPage"
          @toggle-mobile-menu="mobileMenuOpen = !mobileMenuOpen"
      />
      <HeaderBottom v-if="!isLoginPage && !isRegisterPage && !isProfilePage && !isCategoryPage && !isSearchPage" />
      <HeaderBottom2 v-if="isSearchPage"/>
      <MobileMenu
          :is-open="mobileMenuOpen"
          @close="mobileMenuOpen = false"
      />
    </div>
  </header>
</template>

<script>
import HeaderMain from "./HeaderMain";
import HeaderBottom from "@/components/header/HeaderBottom.vue";
import HeaderBottom2 from "@/components/header/HeaderBottom2.vue";
import MobileMenu from "@/components/header/partials/MobileMenu.vue";

export default {
  name: 'HeaderApp', // Nombre del componente con más de una palabra
  components: {
    MobileMenu,
    HeaderBottom,
    HeaderMain,
    HeaderBottom2
  },
  data() {
    return {
      mobileMenuOpen: false
    };
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
      return this.$route.path.startsWith("/categoria"); // Verifica si la ruta comienza con "/categoria/"
    },
    isSearchPage() {
      return this.$route.path.startsWith("/buscar"); // Verifica si la ruta comienza con "/categoria/"
    },
  },
};
</script>
