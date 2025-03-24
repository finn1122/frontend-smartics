<template>
  <section class="breadcrumb__area bg-white pt-100 pb-50">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1 text-left">
            <h3 class="breadcrumb__title">
              <slot name="title">{{ title }}</slot>
            </h3>
            <div class="breadcrumb__list">
              <span>
                <a href="/" class="breadcrumb__link">{{ homeText }}</a>
              </span>
              <slot name="breadcrumb-items">
                <span v-if="title" class="breadcrumb__current">{{ title }}</span>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommonBreadcrumb',
  props: {
    title: {
      type: String,
      default: ''
    },
    homeText: {
      type: String,
      default: 'Home'
    }
  }
}
</script>

<style scoped>
/* Fondo blanco */
.breadcrumb__area {
  background-color: white !important;
}

/* Título con estilos corregidos */
.breadcrumb__title {
  font-size: 44px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 15px;
  color: var(--tp-heading-primary, #2d3436);
  font-family: var(--tp-ff-heading, 'Poppins', sans-serif);
  transition: color 0.3s ease-out;
}

/* Contenedor principal */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-xxl-12 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

/* Contenido del breadcrumb */
.breadcrumb__content {
  text-align: left;
}

.p-relative {
  position: relative;
}

.z-index-1 {
  z-index: 1;
}

/* Lista de breadcrumb */
.breadcrumb__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;
}

.breadcrumb__list span {
  position: relative;
  color: #777;
  font-size: 16px;
  font-weight: 400;
}

.breadcrumb__list span:not(:last-child)::after {
  content: ""; /* Asegúrate de que el pseudo-elemento tenga contenido */
  display: inline-block; /* Hacer que el pseudo-elemento sea visible */
  width: 4px; /* Ancho del separador */
  height: 4px; /* Alto del separador */
  background-color: #a8acb0; /* Color del separador */
  border-radius: 50%; /* Hacerlo circular */
  margin-left: 8px; /* Espacio a la izquierda del separador */
  margin-right: 8px; /* Espacio a la derecha del separador */
  vertical-align: middle; /* Alinear verticalmente con el texto */
}
.breadcrumb__list span {
  font-size: 16px;
  font-weight: 400;
  position: relative;

}

/* Enlaces */
.breadcrumb__link {
  color: #777;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb__link:hover {
  color: var(--tp-theme-primary, #4e73df);
}

.breadcrumb__current {
  color: var(--tp-text-body, #6c757d);
}

/* Espaciados */
.pt-100 {
  padding-top: 100px;
}

.pb-50 {
  padding-bottom: 50px;
}

/* Media queries responsive */
@media (max-width: 767px) {
  .breadcrumb__title {
    font-size: 32px;
  }

  .pt-100 {
    padding-top: 70px;
  }

  .pb-50 {
    padding-bottom: 30px;
  }
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }

  .breadcrumb__title {
    font-size: 38px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}
</style>