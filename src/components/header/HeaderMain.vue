<template>
  <div class="tp-header-main tp-header-sticky">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo -->
        <div class="col-xl-2 col-lg-2 col-md-4 col-6">
          <div class="logo">
            <a href="/">
              <img src="@/assets/logo.png" alt="logo" class="logo-img" />
            </a>
          </div>
        </div>

        <!-- Barra de Búsqueda -->
        <div class="col-xl-6 col-lg-7 d-none d-lg-block">
          <HeaderSearch />
        </div>

        <!-- Acciones del Usuario -->
        <div class="col-xl-4 col-lg-3 col-md-8 col-6">
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
  height: 40px; /* Ajusta el tamaño del logo */
  width: auto; /* Mantiene la proporción */
}

/* Estilos para las columnas */
.col-xl-2,
.col-xl-6,
.col-xl-4,
.col-lg-2,
.col-lg-7,
.col-lg-3,
.col-md-4,
.col-md-8,
.col-6 {
  flex: 1;
  padding: 0 10px;
}
</style>