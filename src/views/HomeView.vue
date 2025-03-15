<template>
  <div>
    <SliderApp v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <ProductCategory v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <FeatureSection v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
    <TrendingSection v-if="!isLoginPage && !isRegisterPage && !isProfilePage"/>
  </div>
</template>

<script>
import SliderApp from "@/components/slider/SliderApp.vue";
import ProductCategory from "@/components/ProductCategory/ProductCategory.vue";
import FeatureSection from "@/components/Feature/FeatureSection.vue";
import TrendingSection from "@/components/Trending/TrendingSection.vue";

export default {
  name: 'HomeView',
  components: {
    SliderApp,
    ProductCategory,
    FeatureSection,
    TrendingSection,
  },
  data() {
    return {
      categories: [],
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
  },
  async created() {},
  methods: {},
};
</script>