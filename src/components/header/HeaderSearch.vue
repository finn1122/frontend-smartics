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

        <!-- Selector de Categoría -->
        <div class="tp-header-search-category">
          <div class="nice-select" tabindex="0" role="button" @click="toggleDropdown">
            <span class="current">{{ selectedCategory || "Select Category" }}</span>
            <ul class="list" role="menubar" v-if="isDropdownOpen">
              <li
                  class="option"
                  role="menuitem"
                  v-for="category in categories"
                  :key="category"
                  @click="selectCategory(category)"
              >
                {{ category }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Botón de Búsqueda (Ícono de Font Awesome) -->
        <div class="tp-header-search-btn">
          <button type="submit" class="search-button">
            <i class="fas fa-search"></i> <!-- Ícono de Font Awesome -->
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      isDropdownOpen: false,
      categories: ["Electronics", "Fashion", "Beauty", "Jewelry"],
    };
  },
  methods: {
    handleSearch() {
      console.log("Searching for:", this.searchQuery, "in category:", this.selectedCategory);
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.isDropdownOpen = false; // Cierra el dropdown después de seleccionar
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
.tp-header-search-category .nice-select {
  border: 0;
  color: var(--tp-common-black);
  font-size: 14px;
  height: 46px;
  line-height: 46px;
  padding-right: 20px;
  cursor: pointer;
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
  margin-left: 8px; /* Espacio entre el texto y el ícono */
  font-size: 12px; /* Tamaño del ícono */
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
  height: 57px;
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
.tp-header-search-category:after {
  background-color: #010f1c4d;
  content: "";
  height: 20px;
  left: 0;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  width: 1px;
}
.tp-header-search-category:after {
  background-color: #010f1c4d;
  content: "";
  height: 20px;
  left: 0;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  width: 1px;
}
</style>