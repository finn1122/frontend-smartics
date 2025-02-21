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
      console.log('toggle dropdown');
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
  gap: 0px; /* Espacio entre elementos */
}


.search-input {
  flex: 2;
  padding: 14px; /* Aumenta la altura sin distorsionar */
  border: 1px solid #ccc;
  border-radius: 6px 0 0 6px;
  font-size: 16px; /* Texto más grande */
  border-right: none;
}

.tp-header-search-category {
  flex: 1;
  border-radius: 0; /* Sin bordes redondeados */
}

.nice-select {
  position: relative; /* Asegura que el dropdown se posicione correctamente */
  padding: 14px;
  border: 1px solid #ccc;
  font-size: 16px;
  border-radius: 0;
  border-right: none;
  background-color: #fff;
  cursor: pointer; /* Cambia el cursor para indicar que es clickeable */
}

.nice-select .current {
  display: block;
}

.nice-select .list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%; /* Asegúrate de que el dropdown tenga el mismo ancho que el select */
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  z-index: 1000; /* Asegúrate de que el dropdown esté por encima de otros elementos */
  margin: 0; /* Elimina márgenes predeterminados */
  padding: 0; /* Elimina padding predeterminado */
  list-style: none; /* Elimina los estilos de lista predeterminados */
}

.nice-select .list .option {
  padding: 10px;
  cursor: pointer;
  white-space: nowrap; /* Evita que el texto se divida en varias líneas */
}

.nice-select .list .option:hover {
  background-color: #f0f0f0;
}
.tp-header-search input {
  width: 100%; /* Hace que el input use todo el espacio disponible */
  max-width: 500px; /* Puedes ajustar el tamaño según lo necesites */
}

.tp-header-search-btn .search-button {
  padding: 14px 18px; /* Ajusta el tamaño */
  font-size: 16px;
  border-radius: 0 6px 6px 0;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #ccc;
  border-left: none; /* Elimina el borde izquierdo para unir con el select */
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.tp-header-search-btn .search-button i {
  font-size: 16px; /* Tamaño del ícono de Font Awesome */
}


/* Estilos responsivos para pantallas menores a 992px */
@media (max-width: 991.98px) {
  .tp-header-search-category {
    display: none; /* Oculta el selector de categorías */
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