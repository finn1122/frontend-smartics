<template>
  <div class="tp-header-main tp-header-sticky">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo (2 columnas en pantallas grandes, 6 en pequeñas) -->
        <div class="col-6 col-md-3 pl-3 pl-md-0"> <!-- Añade padding izquierdo en pantallas pequeñas -->
          <div class="logo">
            <a href="/">
              <img src="@/assets/logo.png" alt="logo" class="logo-img img-fluid" />
            </a>
          </div>
        </div>

        <!-- Barra de Búsqueda (7 columnas en pantallas grandes, oculto en pequeñas) -->
        <div class="col-12 col-md-6 pl-0 d-none d-md-block">
          <HeaderSearch />
        </div>

        <!-- Acciones del Usuario (3 columnas en pantallas grandes, 6 en pequeñas) -->
        <div class="col-6 col-md-3 pr-3"> <!-- Añade padding derecho en pantallas pequeñas -->
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
  padding-bottom: 27px;
  padding-top: 27px;
}

img, svg {
  vertical-align: middle;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Distribuye el espacio entre los elementos */
  margin-left: 0; /* Elimina el margen izquierdo del row */
  margin-right: 0; /* Elimina el margen derecho del row */
}

/* Estilos para el logo */
.logo {
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: flex-start; /* Alinea el logo a la izquierda */
  width: 100%; /* Ocupa todo el espacio disponible */
  height: 100%; /* Ocupa toda la altura de la columna */
}

.logo-img {
  height: 60px; /* Ajusta el tamaño del logo */
  width: auto; /* Mantiene la proporción */
}

/* Estilos para la barra de búsqueda */
.col-md-6 {
  padding-left: 0; /* Elimina el padding izquierdo para pegar el HeaderSearch al logo */
  margin-left: 0; /* Elimina el margen izquierdo */
}

/* Estilos para las acciones del usuario */
.col-md-3 {
  padding-left: 0; /* Elimina el padding izquierdo */
  margin-left: 0; /* Elimina el margen izquierdo */
}

a, button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
}

a {
  text-decoration: none;
}
</style>