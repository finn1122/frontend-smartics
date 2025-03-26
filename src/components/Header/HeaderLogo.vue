<template>
    <div class="logo">
      <a :href="homeRoute">
        <img :src="logoImage" :alt="altText" class="logo-img img-fluid" />
      </a>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import logoImage from '@/assets/logo.png'; // Importación directa del logo

export default defineComponent({
  name: 'HeaderLogo',
  props: {
    altText: {
      type: String,
      default: 'Logo de la tienda'
    },
    homeRoute: {
      type: String,
      default: '/'
    },
    logoHeight: {
      type: Number,
      default: 60
    }
  },
  data() {
    return {
      logoImage: logoImage // Asignamos la imagen importada
    };
  }
});
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
}

.logo-img {
  height: v-bind(logoHeight + 'px');
  width: auto;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

/* Clases responsive para el contenedor */
.col-xl-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-lg-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-md-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}
</style>