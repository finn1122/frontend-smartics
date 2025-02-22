<template>
  <div class="tp-header-search">
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
        <div class="tp-header-search-category d-none d-lg-block">
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
/* Estilos base para el HeaderSearch */
.tp-header-search {
  width: 100%; /* Ocupa todo el ancho disponible */
  max-width: 800px; /* Ajusta este valor según el ancho deseado */
  margin-left: 0; /* Asegura que no haya margen izquierdo */
  padding-left: 0; /* Asegura que no haya padding izquierdo */
}


.tp-header-search-wrapper {
  display: flex;
  align-items: center;
  gap: 0; /* Eliminamos el espacio entre los elementos */
}
.tp-header-search-box {
  width: 50%; /* Ancho específico */
  margin-right: 0px;
}
.search-input {
  box-sizing: border-box; /* Incluye padding y border en el ancho total */
  flex: 2; /* Aumenta el espacio que ocupa el input */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px; /* Bordes redondeados solo a la izquierda */
  font-size: 14px;
  border-right: none; /* Elimina el borde derecho para unir con el selector */
}

.tp-header-search-category {
  position: relative;
  flex: 0 0 auto; /* Ajusta el espacio que ocupa el selector */
}

.nice-select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0; /* Sin bordes redondeados para unir con el input y el botón */
  font-size: 14px;
  cursor: pointer;
  background-color: #fff;
  border-right: none; /* Elimina el borde derecho para unir con el botón */
  width: 100%; /* Asegura que el selector ocupe todo el espacio disponible */
  height: 100%; /* Asegura que el selector tenga la misma altura que los demás elementos */
  display: flex;
  align-items: center; /* Centra el texto verticalmente */
  white-space: nowrap; /* Evita que el texto se divida en varias líneas */
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
.tp-header-search input {
  width: 100%; /* Hace que el input use todo el espacio disponible */
  max-width: 500px; /* Puedes ajustar el tamaño según lo necesites */
}
.tp-header-search-btn {
  display: flex; /* Asegura que el botón ocupe toda la altura */
}

.tp-header-search-btn .search-button {
  padding: 14px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0; /* Bordes redondeados solo a la derecha */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Asegura que el botón tenga la misma altura que los demás elementos */
}

.tp-header-search-btn .search-button i {
  font-size: 16px; /* Tamaño del ícono de Font Awesome */
}


/* Estilos responsivos para pantallas menores a 992px */
@media (max-width: 991.98px) {
  .tp-header-search-category {
    display: none; /* Oculta el selector de categorías */
  }
  .tp-header-search-box {
    display: none;
  }
  .tp-header-search-btn{
    display: none;
  }

  .search-input {
    border-radius: 4px 0 0 4px; /* Bordes redondeados solo a la izquierda */
    border-right: 1px solid #ccc; /* Restaura el borde derecho */
  }

  .search-button {
    border-radius: 0 4px 4px 0; /* Bordes redondeados solo a la derecha */
  }
}
</style>