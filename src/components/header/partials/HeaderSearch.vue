<template>
  <div class="tp-header-search pl-70">
    <form @submit.prevent="handleSearch">
      <div class="tp-header-search-wrapper d-flex align-items-center">
        <!-- Campo de Búsqueda -->
        <div class="tp-header-search-box">
          <input
              type="text"
              placeholder="Search for Products..."
              v-model="searchQuery"
              class="search-input"
          />
        </div>
        <div class="tp-header-search-divider"></div>

        <!-- Selector de Categoría -->
        <div class="tp-header-search-category" ref="dropdown">
          <div class="nice-select" tabindex="0" role="button" @click="toggleDropdown">
            <span class="current">{{ selectedCategory ? selectedCategory.name : "Select Category" }}</span>
            <span class="dropdown-container">
              <i class="dropdown-icon" :class="{'fa-chevron-up': isDropdownOpen, 'fa-chevron-down': !isDropdownOpen}"></i>
            </span>
            <ul class="list" role="menubar" v-if="isDropdownOpen">
              <li class="option" role="menuitem" v-for="category in allCategories" :key="category.id" @click="selectCategory(category)">
                {{ category.name }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Botón de Búsqueda -->
        <div class="tp-header-search-btn">
          <button type="submit" class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import api from "@/services/api";
import { useNotificationStore } from "@/stores/notificationStore";
import { useLoaderStore } from '@/stores/loaderStore'

export default {
  name: "HeaderSearch",
  setup() {
    const notificationStore = useNotificationStore();
    return { notificationStore };
  },
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      isDropdownOpen: false,
      allCategories: [],
      loader: useLoaderStore()
    };
  },
  async created() {
    await this.loadAllCategoriesData();
    document.addEventListener("click", this.closeDropdownOnClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdownOnClickOutside);
  },
  methods: {
    handleSearch() {
      if (!this.searchQuery && !this.selectedCategory) return;

      const routeParams = {
        name: "SearchResults",
        params: {},
        query: {},
      };

      if (this.selectedCategory) {
        routeParams.params.path = this.selectedCategory.path;
      }

      if (this.searchQuery) {
        routeParams.query.search = this.searchQuery.trim();
      }

      this.$router.push(routeParams);
    },
    toggleDropdown(event) {
      event.stopPropagation(); // Evita que el clic cierre el dropdown inmediatamente
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.isDropdownOpen = false;
    },
    async loadAllCategoriesData() {
      this.loader.show() // Aquí usas loader directamente desde data
      try {
        this.allCategories = await api.getAllCategories();
      } catch (error) {
        console.error("❌ Error al cargar la categoría:", error);
        this.notificationStore.showNotification(error.message || "Error al cargar la categoría", "error");
      } finally {
        this.loader.hide()
      }
    },
    closeDropdownOnClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
};
</script>


<style scoped>
.pl-70 {
  padding-left: 70px;
}
.tp-header-search-wrapper {
  border: 2px solid var(--tp-theme-primary);
  margin-left: 10px;
  position: relative;
}

.align-items-center {
  align-items: center !important;
}
.d-flex {
  display: flex !important;
}
.tp-header-search-box {
  width: 58%;
}
.tp-header-search-box input {
  background-color: var(--tp-common-white);
  border: 0;
  color: var(--tp-common-black);
  height: 46px;
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
}
.tp-header-search-category {
  position: relative;
}
.tp-header-search-category .current {
  white-space: nowrap; /* Evita que el texto se rompa en varias líneas */
  overflow: hidden;
  text-overflow: ellipsis; /* Añade puntos suspensivos si el texto es muy largo */
  flex-grow: 1;
}
.tp-header-search-category .nice-select {
  border: 0;
  color: var(--tp-common-black);
  font-size: 14px;
  height: 46px;
  line-height: 46px;
  padding-right: 20px;
  cursor: pointer;
  min-width: 150px; /* Ancho mínimo para evitar saltos */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nice-select {
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  display: block;
  position: relative;
  width: auto;
}
.dropdown-icon {
  font-size: 12px; /* Tamaño del ícono */
  transition: transform 0.3s ease;
}
.nice-select .current {
  padding-right: 12px;
}

.nice-select .list {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.1);
  left: 0;
  margin-top: 4px;
  opacity: 1;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 100%;
  transform: scale(1) translateY(0);
  transform-origin: 50% 0;
  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  z-index: 9;
  max-height: 200px; /* Ajusta la altura máxima */
  overflow-y: auto; /* Habilita el scroll vertical */
  scrollbar-width: thin; /* Hace que el scroll sea delgado en Firefox */
  scrollbar-color: #999 #f1f1f1; /* Color del scroll y del fondo */
}
.nice-select .list::-webkit-scrollbar {
  width: 6px;
}
.nice-select .list::-webkit-scrollbar-track {
  background: #f1f1f1; /* Color del fondo del scroll */
}

.nice-select .list::-webkit-scrollbar-thumb {
  background: #999; /* Color de la barra del scroll */
  border-radius: 3px;
}

.nice-select .list::-webkit-scrollbar-thumb:hover {
  background: #666; /* Color cuando pasas el mouse */
}
.nice-select .option {
  cursor: pointer;
  font-weight: 400;
  line-height: 40px;
  list-style: none;
  min-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  transition: all 0.2s;
}
.tp-header-search-btn {
  position: absolute;
  right: 0;
  top: 0;
}
.tp-header-search-btn button {
  background-color: var(--tp-theme-primary);
  color: var(--tp-common-white);
  height: 47px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}
.tp-header-search-btn button i {
  font-size: 16px;
}
.tp-header-search-divider {
  width: 2px;
  height: 30px;
  background-color: #ccc; /* Color gris claro */
  margin-left: -10px;
}
</style>