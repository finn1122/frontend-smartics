<template>
  <section class="slider-area position-relative z-index-1">
    <!-- Swiper Container -->
    <swiper
        v-if="apiSlides.length > 0"
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: true }"
        :pagination="{ clickable: true }"
        :navigation="{ nextEl: '.Slider-button-next', prevEl: '.Slider-button-prev' }"
        class="swiper-container"
    >
      <!-- Slides -->
      <swiper-slide
          v-for="slide in apiSlides"
          :key="slide.id"
          class="slider-item d-flex align-items-center"
          :class="!isHexColor(slide.bgColor) ? slide.bgColor : ''"
          :style="isHexColor(slide.bgColor) ? { backgroundColor: slide.bgColor } : {}"
      >
        <!-- Contenido del slide -->
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <!-- Texto a la izquierda o derecha -->
            <div
                class="col-lg-5 col-md-6"
                :class="{ 'order-lg-1': slide.textPosition === 'left', 'order-lg-2': slide.textPosition === 'right' }"
            >
              <div class="slider-content position-relative z-index-1">
                <span v-if="slide.price" class="d-block mb-2">Starting at <b>{{ formatPrice(slide.price) }}</b></span>
                <h3 class="slider-title mb-3">{{ slide.title }}</h3>
                <p class="slider-subtitle mb-4">
                  {{ slide.subtitle }}
                  <span v-if="slide.promoMessage" class="discount">{{ slide.promoMessage }}</span>
                </p>
                <a :href="slide.buttonLink" class="btn btn-primary">
                  {{ slide.buttonText || 'Ver más' }}
                  <font-awesome-icon :icon="['fas', 'arrow-right']" class="ms-2" />
                </a>
              </div>
            </div>
            <!-- Imagen a la derecha o izquierda -->
            <div
                class="col-lg-7 col-md-6"
                :class="{ 'order-lg-2': slide.textPosition === 'left', 'order-lg-1': slide.textPosition === 'right' }"
            >
              <div
                  class="slider-image h-100"
                  :class="{ 'text-end': slide.textPosition === 'left', 'text-start': slide.textPosition === 'right' }"
              >
                <img
                    v-if="slide.imageUrl"
                    :src="slide.imageUrl"
                    :alt="`Imagen de ${slide.title}`"
                    class="img-fluid h-100"
                    loading="lazy"
                />
                <div v-else class="placeholder-image">
                  <font-awesome-icon :icon="['fas', 'image']" size="3x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Navegación -->
      <div v-if="apiSlides.length > 1" class="slider-navigation d-none d-lg-block">
        <button
            type="button"
            class="slider-button-prev"
            tabindex="0"
            aria-label="Slide anterior"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
        <button
            type="button"
            class="slider-button-next"
            tabindex="0"
            aria-label="Slide siguiente"
        >
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>

      <!-- Paginación -->
      <div v-if="apiSlides.length > 1" class="slider-pagination swiper-pagination"></div>
    </swiper>

    <!-- Loading State -->
    <div v-if="loading" class="slider-loading text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-if="error" class="slider-error text-center py-5">
      <div class="alert alert-danger">
        {{ error }}
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import api from "@/services/api";

export default {
  name: "SliderApp",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      apiSlides: [],
      loading: false,
      error: null
    };
  },
  async created() {
    await this.fetchSliders();
  },
  methods: {
    async fetchSliders() {
      this.loading = true;
      this.error = null;

      try {
        const response = await api.getSliders();
        this.apiSlides = response.map(slide => ({
          ...slide,
          // Mantener compatibilidad con nombres de campos anteriores si es necesario
          discount: slide.promoMessage,
          image: slide.imageUrl,
          promoMessage: slide.promoMessage || slide.promo_message
        }));
      } catch (error) {
        console.error("❌ Error al obtener los sliders:", error);
        this.error = error.message || "Error al cargar los sliders";
      } finally {
        this.loading = false;
      }
    },
    isHexColor(color) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    },
    formatPrice(price) {
      if (!price) return '';
      return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
      }).format(price);
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
</script>

<style scoped>
/* Estilos generales */
.slider-area {
  position: relative;
  overflow: hidden;
}

.slider-item {
  height: 500px; /* Alto fijo para pantallas grandes */
  display: flex;
  align-items: center;
}

.slider-content {
  color: white; /* Color del texto */
  padding: 0 2rem; /* Espaciado interno para el texto */
}

.slider-title {
  font-size: 2.5rem;
  font-weight: 900;
  animation: fadeInUp 1s ease-in-out;
}

.slider-subtitle {
  font-size: 1.25rem;
  animation: fadeInUp 1.5s ease-in-out;
}

.discount {
  color: #ffcc00; /* Color del descuento */
  font-weight: bold;
}

.slider-image {
  height: 100%; /* Ajustar la imagen al 100% del contenedor */
  padding: 0 2rem; /* Espaciado interno para la imagen */
}

.slider-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajustar la imagen sin distorsionarla */
  animation: fadeInRight 1s ease-in-out;
}

/* Navegación */
.slider-navigation {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  z-index: 10;
  opacity: 0; /* Ocultar por defecto */
  transition: opacity 0.6s ease; /* Transición más lenta (0.6 segundos) */
}

/* Mostrar botones al hacer hover sobre el Slider */
.slider-area:hover .slider-navigation {
  opacity: 1;
}

.slider-button-prev,
.slider-button-next {
  background: rgba(255, 255, 255, 0.2); /* Fondo semi-transparente */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

/* Posicionar botón "anterior" a la izquierda */
.slider-button-prev {
  left: 20px;
}

/* Posicionar botón "siguiente" a la derecha */
.slider-button-next {
  right: 20px;
}

.slider-button-prev:hover,
.slider-button-next:hover {
  background: rgba(255, 255, 255, 0.5); /* Fondo más visible al hacer hover */
  transform: translateY(-50%) scale(1.1);
}

/* Paginación */
.slider-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

/* Animaciones */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsividad */
@media (max-width: 992px) {
  .slider-item {
    height: 600px; /* Alto más grande para pantallas medianas */
  }

  .slider-title {
    font-size: 2rem; /* Título más pequeño */
  }

  .slider-subtitle {
    font-size: 1rem; /* Subtítulo más pequeño */
  }
}

@media (max-width: 768px) {
  .slider-item {
    height: 700px; /* Alto más grande para pantallas pequeñas */
  }

  .slider-title {
    font-size: 1.5rem; /* Título más pequeño */
  }

  .slider-subtitle {
    font-size: 0.875rem; /* Subtítulo más pequeño */
  }
}
</style>