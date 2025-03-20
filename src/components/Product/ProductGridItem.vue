<template>
  <div class="tp-product-list">
    <div class="tp-product-item transition-3" :class="{ disabled: !hasInventory }">
    <div class="tp-product-thumb p-relative fix m-img">
      <a v-if="product.gallery && product.gallery.length > 0" :href="product.gallery[0].imageUrl">
        <img :src="product.gallery[0].imageUrl" :alt="product.name">
      </a>
      <!-- Mostrar "Sin inventario" en el espacio del badge cuando quantity es 0 -->
      <div class="tp-product-badge" v-if="!hasInventory">
        <span class="product-no-stock">Sin inventario</span>
      </div>
      <!-- Mostrar el badge normal si hay inventario y hay un badge definido -->
      <div class="tp-product-badge" v-else-if="product.badge">
        <span class="product-hot">{{ product.badge }}</span>
      </div>
      <div class="tp-product-action">
        <button type="button" class="tp-product-action-btn tp-product-add-cart-btn" :disabled="!hasInventory">
          <div class="icon-rectangle">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            <span class="tp-product-tooltip">Add to Cart</span>
          </div>
        </button>
        <button type="button" class="tp-product-action-btn tp-product-quick-view-btn" :disabled="!hasInventory">
          <div class="icon-rectangle">
            <font-awesome-icon :icon="['fas', 'eye']" />
            <span class="tp-product-tooltip">Quick View</span>
          </div>
        </button>
        <button type="button" class="tp-product-action-btn tp-product-add-to-wishlist-btn" :disabled="!hasInventory">
          <div class="icon-rectangle">
            <font-awesome-icon :icon="['fas', 'heart']" />
            <span class="tp-product-tooltip">Add To Wishlist</span>
          </div>
        </button>
      </div>
    </div>
    <div class="tp-product-content">
      <div class="tp-product-category">
        <a :href="`/category/${category}`">{{ category?.name }}</a>
      </div>
      <h3 class="tp-product-title">
        <a :href="`/product/${product.id}`">{{ product.name }}</a>
      </h3>
      <div class="tp-product-rating d-flex align-items-center">
        <div class="tp-product-rating-icon">
          <span v-if="!product.rating">No rating available</span>
          <span v-else v-for="(star, index) in product.rating" :key="index">
            <font-awesome-icon :icon="star === 0.5 ? ['fas', 'star-half-stroke'] : ['fas', 'star']" />
          </span>
        </div>
        <div class="tp-product-rating-text">
          <span>({{ product.reviews || 0 }} Review)</span>
        </div>
      </div>
      <div class="tp-product-price-wrapper">
        <div v-if="product.bestPrice?.salePrice">
          <span class="tp-product-price old-price">${{ product.bestPrice.salePrice }}</span>
          <span class="tp-product-price new-price">${{ product.bestPrice.newSalePrice }}</span>
        </div>
        <span v-else class="tp-product-price new-price">${{ product.bestPrice?.newSalePrice || '0.00' }}</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGridItem',
  props: {
    category: {
      type: Object,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Verificar si el producto tiene inventario
    hasInventory() {
      return this.product.bestPrice?.quantity > 0;
    },
  },
};
</script>
<style scoped>
/* Estilos para el título del producto */
.tp-product-title {
  margin: 0; /* Elimina el margen predeterminado */
  line-height: 1.2; /* Reduce el line-height para acercar las líneas */
  margin-top: 8px; /* Añade un margen superior para separar del category.name */
}

.tp-product-title a {
  display: block; /* Hace que el enlace ocupe todo el ancho */
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  margin: 0; /* Elimina el margen del enlace */
  padding: 0; /* Elimina el padding del enlace */
}

/* Estilos para productos deshabilitados */
.tp-product-item.disabled {
  opacity: 0.6;
  pointer-events: none; /* Deshabilita clics */
}

/* Estilos para el badge "Sin inventario" */
.tp-product-badge .product-no-stock {
  background-color: rgba(0, 0, 0, 0.8); /* Fondo negro semitransparente */
  color: white; /* Texto blanco */
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

/* Estilos para el badge normal */
.tp-product-badge .product-hot {
  background-color: #ff0000; /* Fondo rojo */
  color: white; /* Texto blanco */
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

/* Estilos generales para los productos */
.tp-product-area {
  margin-bottom: 3rem;
}

/* Contenedor de la imagen del producto */
.tp-product-thumb {
  position: relative;
  overflow: hidden;
  border: 1px solid #eaebed;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
  aspect-ratio: 1 / 1; /* Proporción 1:1 (cuadrado) */
}

/* Estilos para la imagen del producto */
.tp-product-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ajusta la imagen dentro del contenedor sin recortar */
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #f5f5f5; /* Color de fondo para rellenar los espacios vacíos */
}


/* Estilos para el contenedor del producto */
.tp-product-item {
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%; /* Asegura que todos los productos tengan la misma altura */
}

/* Efecto hover en el producto */
.tp-product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

/* Efecto hover en la imagen del producto */
.tp-product-item:hover .tp-product-thumb img {
  transform: none;
}

/* Contenedor de acciones (botones) */
.tp-product-action {
  position: absolute;
  bottom: 40px;
  right: -100px;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* Mostrar acciones al hacer hover */
.tp-product-item:hover .tp-product-action {
  right: 10px;
  opacity: 1;
}

/* Estilos para los botones de acción */
.tp-product-action-btn {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  height: 40px;
  width: 40px;
  position: relative;
  transition: all 0.3s ease;
  padding: 0;
}

/* Bordes redondeados para el primer y último botón */
.tp-product-action-btn:first-child {
  border-radius: 5px 5px 0 0;
}

.tp-product-action-btn:last-child {
  border-radius: 0 0 5px 5px;
}

/* Efecto hover en los botones de acción */
.tp-product-action-btn:hover {
  background-color: #f0f0f0;
}

/* Contenedor del ícono dentro del botón */
.icon-rectangle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Estilos para el tooltip de los botones */
.tp-product-tooltip {
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  left: -100px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s ease;
  font-size: 12px;
}

/* Mostrar tooltip al hacer hover en el botón */
.tp-product-action-btn:hover .tp-product-tooltip {
  visibility: visible;
  opacity: 1;
  left: -110px;
}

/* Estilos para el badge (etiqueta) del producto */
.tp-product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Estilos para la categoría del producto */
.tp-product-category > a {
  font-size: 12px;
  font-weight: 500;
  color: #55585b;
  text-decoration: none;
  display: block;
  margin-bottom: 8px; /* Añade un margen inferior para separar del product.name */
}

/* Estilos para el ícono de rating */
.tp-product-rating-icon span {
  color: #ffc107;
  font-size: 12px;
}

/* Estilos para el texto de rating */
.tp-product-rating-text span {
  color: #55585b;
  font-family: "Jost", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;
  margin-left: 5px;
}

/* Estilos para el precio antiguo */
.tp-product-price.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 5px;
}

/* Estilos para el precio nuevo */
.tp-product-price.new-price {
  color: #007bff;
  font-weight: 600;
}

/* Contenedor del contenido del producto */
.tp-product-content {
  flex-grow: 1; /* Hace que el contenido ocupe el espacio restante */
  padding: 10px 30px 20px;
  border-left: 1px solid #eaebed;
  border-right: 1px solid #eaebed;
  border-bottom: 1px solid #eaebed;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

/* Estilos para el título de la sección */
.tp-section-title svg {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}
/* Media queries para responsividad */
@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;

  }
}

@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}


</style>