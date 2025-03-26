<template>
  <div id="header-sticky" class="tp-header-bottom-2 tp-header-sticky">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo (2 columnas en pantallas grandes, 6 en pequeñas) -->
        <div class="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6"> <!-- Añade padding izquierdo en pantallas pequeñas -->
          <div class="logo">
            <a href="/">
              <img src="@/assets/logo.png" alt="logo" class="logo-img img-fluid" />
            </a>
          </div>
        </div>
        <div class="col-xl-5 d-none d-xl-block">

        </div>

        <!-- Barra de Búsqueda (7 columnas en pantallas grandes, oculto en pequeñas) -->
        <div class="col-xl-5 col-lg-7 col-md-7 col-sm-8 col-6">
          <div class="tp-header-bottom-right d-flex align-items-center justify-content-end pl-30">
            <HeaderSearch2 />
          </div>

        </div>


      </div>
    </div>
  </div>
</template>
<script>
import HeaderSearch2 from "@/components/Header/partials/HeaderSearch2.vue";

export default {
  name: 'HeaderBottom2',
  components: {HeaderSearch2},
}
</script>
<style scoped>
/* Estilos para el HeaderMain */
.tp-header-bottom-2 {
  padding-bottom: 27px;
  padding-top: 27px;
}

img, svg {
  vertical-align: middle;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex
;
  flex-wrap: wrap;
  margin-left: calc(var(--bs-gutter-x)* -.5);
  margin-right: calc(var(--bs-gutter-x)* -.5);
  margin-top: calc(var(--bs-gutter-y)* -1);
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


a, button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
}

a {
  text-decoration: none;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex
;
  flex-wrap: wrap;
  margin-left: calc(var(--bs-gutter-x)* -.5);
  margin-right: calc(var(--bs-gutter-x)* -.5);
  margin-top: calc(var(--bs-gutter-y)* -1);
}
.pl-30 {
  padding-left: 30px;
}

.align-items-center {
  align-items: center !important;
}
.justify-content-end {
  justify-content: flex-end !important;
}
.d-flex {
  display: flex !important
;
}
</style>