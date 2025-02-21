<template>
  <div class="tp-header-main tp-header-sticky">
    <div class="container">
      <div class="row align-items-center d-flex g-0">
        <!-- Logo (tamaño automático) -->
        <div class="col-auto p-0">
          <div class="logo">
            <a href="/">
              <img src="@/assets/logo.png" alt="logo" class="logo-img img-fluid" />
            </a>
          </div>
        </div>

        <!-- Barra de Búsqueda (ocupa el resto del espacio disponible) -->
        <div class="col d-flex align-items-center p-0 ms-3"> <!-- ms-3 añade separación del logo -->
          <HeaderSearch />
        </div>

        <!-- Acciones del Usuario (alineadas a la derecha) -->
        <div class="col-auto p-0 ms-auto">
          <HeaderActions />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch.vue";
import HeaderActions from "./HeaderActions.vue";



export default {
  name: "HeaderMain",
  components: {
    HeaderSearch,
    HeaderActions,
  },
};
</script>


<style scoped>
/* Estilos para el HeaderMain */
.tp-header-main {
  background-color: #ffffff;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}
.header-search-container {
  padding-left: 0 !important; /* Elimina cualquier padding extra a la izquierda */
  justify-content: flex-start; /* Asegura que los elementos estén alineados a la izquierda */
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Estilos para el logo */
.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 40px; /* Ajusta el tamaño del logo */
  width: auto; /* Mantiene la proporción */
}

/* Estilos para las columnas */
.col-xl-2,
.col-xl-9,
.col-xl-1,
.col-lg-2,
.col-lg-9,
.col-lg-1,
.col-md-4,
.col-md-8,
.col-6 {
  flex: 1;
  padding: 0 10px;
}
</style>