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
          <div class="nice-select" @click="toggleDropdown">
            <span class="current">{{ selectedCategory || "Select Category" }}</span>
            <ul class="list" v-if="isDropdownOpen">
              <li
                  class="option"
                  v-for="category in categories"
                  :key="category"
                  @click="selectCategory(category)"
              >
                {{ category }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Botón de Búsqueda -->
        <div class="tp-header-search-btn">
          <button type="submit" class="search-button">
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
              <path
                  d="M19 19L14.65 14.65"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
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
/* Estilos para el formulario de búsqueda */
.tp-header-search {
  width: 100%;
}

.tp-header-search-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tp-header-search-box {
  flex: 1;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.tp-header-search-category {
  position: relative;
}

.nice-select {
  position: relative;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
}

.nice-select .current {
  display: block;
}

.nice-select .list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  z-index: 10;
}

.nice-select .list .option {
  padding: 10px;
  cursor: pointer;
}

.nice-select .list .option:hover {
  background-color: #f0f0f0;
}

.tp-header-search-btn .search-button {
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tp-header-search-btn .search-button svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: #fff;
}
</style>