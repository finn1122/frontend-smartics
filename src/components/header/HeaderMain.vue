<template>
  <div class="tp-header-main tp-header-sticky">
    <div class="container">
      <div class="row">
        <!-- Logo (2 columnas) -->
        <div class="col-3 pl-0"> <!-- Elimina el padding izquierdo -->
          <div class="logo">
            <a href="/">
              <img src="@/assets/logo.png" alt="logo" class="logo-img img-fluid" />
            </a>
          </div>
        </div>

        <!-- Barra de Búsqueda (7 columnas) -->
        <div class="col-6 pl-0"> <!-- Elimina el padding izquierdo -->
          <HeaderSearch />
        </div>

        <!-- Acciones del Usuario (3 columnas) -->
        <div class="col-3">
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
  justify-content: flex-start; /* Alinea todo a la izquierda */
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
  margin-left: 0; /* Elimina el margen izquierdo del logo */
  padding-left: 0; /* Elimina el padding izquierdo del logo */
}

.logo-img {
  height: 60px; /* Ajusta el tamaño del logo */
  width: auto; /* Mantiene la proporción */
}

/* Estilos para la barra de búsqueda */
.col-6 {
  padding-left: 0; /* Elimina el padding izquierdo para pegar el HeaderSearch al logo */
  margin-left: 0; /* Elimina el margen izquierdo */
}

/* Estilos para las acciones del usuario */
.col-3 {
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