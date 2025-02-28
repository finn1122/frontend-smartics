<template>
  <div class="tp-header-main tp-header-sticky">
    <div class="container">
      <div class="row align-items-center g-0">
        <!-- Logo (2 columnas) -->
        <div class="col-2 p-0">
          <div class="logo">
            <a href="/">
              <img src="@/assets/logo.png" alt="logo" class="logo-img img-fluid" />
            </a>
          </div>
        </div>

        <!-- Barra de Búsqueda (7 columnas) -->
        <div class="col-7 p-0">
          <HeaderSearch />
        </div>

        <!-- Acciones del Usuario (3 columnas) -->
        <div class="col-3 p-0">
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
  height: 60px; /* Ajusta el tamaño del logo */
  width: auto; /* Mantiene la proporción */
}
</style>