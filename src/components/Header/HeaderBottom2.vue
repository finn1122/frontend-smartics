<template>
  <div class="tp-header-area tp-header-style-primary tp-header-height">
    <div class="tp-header-top-2 p-relative z-index-11 tp-header-top-border d-none d-md-block">
      <div id="header-sticky" class="tp-header-bottom-2 tp-header-sticky">
        <div class="container">
          <div class="row align-items-center">
            <!-- Logo (2 columnas en pantallas grandes, 6 en pequeñas) -->
            <div class="col-xl-2 col-lg-5 col-md-5 col-sm-4 col-6"> <!-- Añade padding izquierdo en pantallas pequeñas -->
              <HeaderLogo />
            </div>
            <div class="col-xl-5 d-none d-xl-block">
              <HeaderBottomMainNavigation/>
            </div>

            <!-- Barra de Búsqueda (7 columnas en pantallas grandes, oculto en pequeñas) -->
            <div class="col-xl-5 col-lg-7 col-md-7 col-sm-8 col-6">
              <div class="tp-header-bottom-right d-flex align-items-center justify-content-end pl-30">
                <HeaderSearch2 />
                <div class="tp-header-action d-flex align-items-center ml-30">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderSearch2 from "@/components/Header/partials/HeaderSearch2.vue";
import HeaderLogo from "@/components/Header/partials/HeaderLogo.vue";
import HeaderActions from "@/components/Header/partials/HeaderActions.vue";
import HeaderBottomMainNavigation from "@/components/Header/HeaderBottom/MainNavigation.vue";

export default {
  name: 'HeaderBottom2',
  components: {HeaderBottomMainNavigation, HeaderActions, HeaderLogo, HeaderSearch2},
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
.ml-30 {
  margin-left: 30px;
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
.tp-header-style-primary {
  box-shadow: 0 2px 6px #010f1c29;
  position: relative;
  z-index: 11;
}
.tp-header-top-border {
  border-bottom: 1px solid rgba(1, 15, 28, .1);
}

.p-relative {
  position: relative;
}
.z-index-11 {
  z-index: 11;
}
</style>