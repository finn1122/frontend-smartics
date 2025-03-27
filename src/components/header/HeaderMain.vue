<template>
  <div class="tp-header-main tp-header-sticky">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo (2 columnas en pantallas grandes, 6 en pequeñas) -->
        <div class="col-xl-2 col-lg-2 col-md-4 col-6">
          <HeaderLogo
            alt-text="Mi Tienda Online"
            :logo-height="70"
            home-route="/inicio"
        />
        </div>

        <!-- Barra de Búsqueda (7 columnas en pantallas grandes, oculto en pequeñas) -->
        <div class="col-xl-6 col-lg-7 d-none d-lg-block">
          <HeaderSearch />
        </div>

        <!-- Acciones del Usuario (3 columnas en pantallas grandes, 6 en pequeñas) -->
        <div class="col-xl-4 col-lg-3 col-md-8 col-6">
          <div class="tp-header-main-right d-flex align-items-center justify-content-end">
            <!-- Login con margen derecho grande -->
            <HeaderLogin class="login-spacer" />
              <!-- Comparar -->
              <HeaderActions
                  v-if="showCompare"
                  icon="exchange-alt"
                  :badge-count="0"
                  href="/compare"
                  class="d-none d-lg-flex"
              />
              <!-- Wishlist -->
              <HeaderActions
                  v-if="showWishlist"
                  icon="heart"
                  :badge-count="0"
                  href="/wishlist"
                  class="d-none d-lg-flex"
              />
              <!-- Carrito -->
              <HeaderActions
                  v-if="showCart"
                  icon="shopping-cart"
                  :badge-count="0"
                  :is-button="true"
                  @click="handleCartClick"
              />
              <!-- Menú móvil -->
              <HeaderActions
                  v-if="showMobileMenu"
                  icon="bars"
                  class="d-lg-none"
                  :is-button="true"
                  @click="handleMobileMenuToggle"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "./partials/HeaderSearch.vue";
import HeaderLogin from "@/components/header/partials/HeaderLogin.vue";
import HeaderActions from "@/components/header/partials/HeaderActions.vue";
import HeaderLogo from "@/components/header/partials/HeaderLogo.vue";

export default {
  name: "HeaderMain",
  components: {
    HeaderLogo,
    HeaderActions,
    HeaderLogin,
    HeaderSearch,
  },
  props: {
    showCompare: {
      type: Boolean,
      default: true
    },
    showWishlist: {
      type: Boolean,
      default: true
    },
    showCart: {
      type: Boolean,
      default: true
    },
    showMobileMenu: {
      type: Boolean,
      default: true
    },
    cartItemsCount: {
      type: Number,
      default: 0
    },
    wishlistItemsCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['toggle-mobile-menu', 'cart-click'],
  methods: {
    handleMobileMenuToggle() {
      this.$emit('toggle-mobile-menu');
    },
    handleCartClick(){
      console.log('handleCartClick')
    }
  }
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
.align-items-center {
  align-items: center !important;
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
/* Espaciado después del login */
.login-spacer {
  margin-right: 30px; /* Margen grande entre login y acciones */
}
</style>