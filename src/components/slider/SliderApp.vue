<template>
  <section class="slider-area position-relative z-index-1">
    <!-- Swiper Container -->
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="0"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="{ nextEl: '.slider-button-next', prevEl: '.slider-button-prev' }"
        class="swiper-container"
    >
      <!-- Slides -->
      <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="slider-item d-flex align-items-center"
          :class="!isHexColor(slide.bgColor) ? slide.bgColor : ''"
          :style="isHexColor(slide.bgColor) ? { backgroundColor: slide.bgColor } : {}"
      >
        <!-- Contenido del slide -->
        <div class="container">
          <div class="row align-items-center">
            <!-- Texto a la izquierda o derecha -->
            <div
                class="col-lg-5 col-md-6"
                :class="{ 'order-lg-1': slide.textPosition === 'left', 'order-lg-2': slide.textPosition === 'right' }"
            >
              <div class="slider-content position-relative z-index-1">
                <span class="d-block mb-2">Starting at <b>{{ slide.price }}</b></span>
                <h3 class="slider-title mb-3">{{ slide.title }}</h3>
                <p class="slider-subtitle mb-4">
                  {{ slide.subtitle }}
                  <span class="discount">{{ slide.discount }}</span>
                </p>
                <a :href="slide.buttonLink" class="btn btn-primary">
                  {{ slide.buttonText }}
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
                  class="slider-image"
                  :class="{ 'text-end': slide.textPosition === 'left', 'text-start': slide.textPosition === 'right' }"
              >
                <img
                    :src="slide.image"
                    :alt="slide.title"
                    class="img-fluid"
                    style="width: 400px; height: auto;"
                />
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Navegación -->
      <div class="slider-navigation d-none d-lg-block">
        <button type="button" class="slider-button-prev">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
        <button type="button" class="slider-button-next">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>

      <!-- Paginación -->
      <div class="slider-pagination swiper-pagination"></div>
    </swiper>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default {
  name: "SliderApp",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      type: Array,
      required: false,
      default: () => [
        {
          bgColor: "bg-dark", // Clase de fondo
          price: "$274.00",
          title: "The best tablet Collection 2023",
          subtitle: "Exclusive offer",
          discount: "-35% off this week",
          buttonText: "Shop Now",
          buttonLink: "/shop",
          image: "https://webapi3.adata.com/storage/product/hd330_f.png", // Ruta de la imagen
          textPosition: "left", // Posición del texto (left o right)
        },
        {
          bgColor: "#115061", // Color hexadecimal
          price: "$999.00",
          title: "The best notebook collection 2023",
          subtitle: "Exclusive offer",
          discount: "-10% off this week",
          buttonText: "Shop Now",
          buttonLink: "/shop",
          image: "https://invictuspc.com.mx/cdn/shop/files/1024.png?v=1732727791",
          textPosition: "right", // Posición del texto (left o right)
        },
      ],
    },
  },
  setup() {
    // Función para verificar si el valor es un color hexadecimal
    const isHexColor = (color) => {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
    };

    return {
      modules: [Autoplay, Pagination, Navigation],
      isHexColor,
    };
  },
};
</script>

<style scoped>
.slider-area {
  position: relative;
  overflow: hidden;
}

.slider-item {
  min-height: 500px; /* Altura mínima del slider */
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
  padding: 0 2rem; /* Espaciado interno para la imagen */
}

.slider-image img {
  max-width: 100%;
  height: auto;
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

/* Mostrar botones al hacer hover sobre el slider */
.slider-area:hover .slider-navigation {
  opacity: 1;
}

.slider-button-prev,
.slider-button-next {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  transition: all 0.3s ease; /* Transición para el efecto de resaltado */
}

/* Posicionar botón "anterior" a la izquierda */
.slider-button-prev {
  left: 20px;
}

/* Posicionar botón "siguiente" a la derecha */
.slider-button-next {
  right: 20px;
}

/* Resaltar los botones al hacer hover sobre ellos */
.slider-button-prev:hover,
.slider-button-next:hover {
  color: #ffcc00; /* Cambiar el color al hacer hover */
  transform: translateY(-50%) scale(1.2); /* Aumentar el tamaño */
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
</style>