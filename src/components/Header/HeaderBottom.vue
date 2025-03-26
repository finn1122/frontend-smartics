<template>
  <div class="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
    <div class="container">
      <div class="tp-mega-menu-wrapper p-relative">
        <div class="row align-items-center">
          <!-- Categorías -->
          <div class="col-xl-3 col-lg-3">
            <HeaderBottomCategoryDropdown :categories="categories" />
          </div>

          <!-- Navegación Principal -->
          <div class="col-xl-6 col-lg-6">
            <HeaderBottomMainNavigation />
          </div>

          <!-- Información de Contacto -->
          <div class="col-xl-3 col-lg-3">
            <HeaderBottomContactInfo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useNotificationStore } from "@/stores/notificationStore";
import api from "@/services/api";
import HeaderBottomCategoryDropdown from "./HeaderBottom/CategoryDropdown.vue";
import HeaderBottomMainNavigation from "./HeaderBottom/MainNavigation.vue";
import HeaderBottomContactInfo from "./HeaderBottom/ContactInfo.vue";

export default {
  name: "HeaderBottom",
  components: {
    HeaderBottomCategoryDropdown,
    HeaderBottomMainNavigation,
    HeaderBottomContactInfo
  },
  setup() {
    const notificationStore = useNotificationStore();
    const categories = ref([]);

    const loadAllCategoriesData = async () => {
      try {
        categories.value = await api.getAllCategories();
      } catch (error) {
        console.error("Error al cargar categorías:", error);
        notificationStore.showNotification(
            error.message || "Error al cargar categorías",
            "error"
        );
      }
    };

    return {
      categories,
      loadAllCategoriesData
    };
  },
  async created() {
    await this.loadAllCategoriesData();
  }
};
</script>

<style scoped>
.tp-header-bottom-border {
  border-top: 1px solid rgba(1, 15, 28, 0.1);
}
</style>