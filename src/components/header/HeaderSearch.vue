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
  display: flex;
  justify-content: flex-start; /* Alinea el contenido a la izquierda */
}

.tp-header-search-wrapper {
  border: 2px solid var(--tp-theme-primary); /* Rectángulo azul */
  border-radius: 4px; /* Bordes redondeados */
  display: flex; /* Activa Flexbox */
  align-items: center; /* Centra verticalmente los elementos */
  padding: 0; /* Elimina el padding interno */
  height: 46px; /* Altura fija para el contenedor */
  width: auto; /* Ancho ajustado al contenido */
  margin-left: 0; /* Elimina el margen izquierdo */
}

.search-input {
  flex: 1; /* Ocupa el espacio restante */
  padding: 10px 25px; /* Padding interno */
  border: none; /* Elimina el borde */
  font-size: 14px;
  height: 100%; /* Asegura que ocupe toda la altura del contenedor */
  background-color: var(--tp-common-white); /* Fondo blanco */
  color: var(--tp-common-black); /* Color del texto */
  outline: none; /* Elimina el outline al hacer focus */
  min-width: 200px; /* Ancho mínimo para el input */
  margin-left: 0; /* Elimina el margen izquierdo */
}

.tp-header-search-category {
  flex: 0 0 auto; /* No crece ni se reduce */
  height: 100%; /* Asegura que ocupe toda la altura del contenedor */
  position: relative; /* Para posicionar el ícono de desplegable */
}

.nice-select {
  padding: 0 30px 0 20px; /* Padding interno (más a la derecha para el ícono) */
  border: none; /* Elimina el borde */
  height: 100%; /* Asegura que ocupe toda la altura del contenedor */
  display: flex;
  align-items: center; /* Centra el texto verticalmente */
  background-color: var(--tp-common-white); /* Fondo blanco */
  color: var(--tp-common-black); /* Color del texto */
  font-size: 14px;
  cursor: pointer;
  position: relative; /* Para posicionar el ícono de desplegable */
}

.nice-select::after {
  content: "▼"; /* Ícono de flecha hacia abajo */
  position: absolute;
  right: 10px; /* Posición del ícono */
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: var(--tp-common-black); /* Color del ícono */
}

.nice-select .current {
  display: block;
  margin: 0; /* Elimina cualquier margen */
  padding: 0; /* Elimina cualquier padding */
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

.tp-header-search-btn {
  flex: 0 0 auto; /* No crece ni se reduce */
  height: 100%; /* Asegura que ocupe toda la altura del contenedor */
}

.tp-header-search-btn .search-button {
  padding: 0 20px; /* Padding interno */
  background-color: var(--tp-theme-primary); /* Fondo azul */
  color: #fff; /* Color del texto */
  border: none; /* Elimina el borde */
  border-radius: 0 4px 4px 0; /* Bordes redondeados solo a la derecha */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Asegura que ocupe toda la altura del contenedor */
}

.tp-header-search-btn .search-button i {
  font-size: 16px; /* Tamaño del ícono de Font Awesome */
}

/* Estilos responsivos para pantallas menores a 992px */
@media (max-width: 991.98px) {
  .tp-header-search {
    display: none; /* Oculta todo el HeaderSearch en pantallas pequeñas */
  }
}
</style>