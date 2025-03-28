<template>
  <section class="tp-product-area pb-55">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-5 col-lg-6 col-md-5">
          <div class="tp-section-title-wrapper mb-40">
            <h3 class="tp-section-title">
              {{ activeTagName || 'Productos' }}
              <svg width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 30 C10 20, 30 10, 60 15 C90 20, 100 10, 113 5" stroke="#B2DFDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </h3>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-7">
          <div class="tp-product-tab tp-product-tab-border mb-45 tp-tab d-flex justify-content-md-end">
            <ul class="nav nav-tabs justify-content-sm-end" id="productTab">
              <li class="nav-item" v-for="tag in tags" :key="tag.id">
                <button
                    class="nav-link"
                    :class="{ active: activeTab === tag.id }"
                    @click="setActiveTab(tag.id)"
                >
                  <span class="tab-text">{{ tag.name }}</span>
                  <span class="tp-product-tab-line" v-if="activeTab === tag.id">
                    <svg width="52" height="13" viewBox="0 0 52 13" fill="none">
                      <path d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635" stroke="#B2DFDB" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-product-tab-content">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-sm-6" v-for="product in filteredProducts" :key="product.id">
                <ProductGridItem :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/services/api";
import { useNotificationStore } from '@/stores/notificationStore';
import ProductGridItem from "@/components/products/ProductsGridItem.vue";
import { useLoaderStore } from '@/stores/loaderStore'

export default {
  name: 'TagsSection',
  components: {
    ProductGridItem,
  },
  data() {
    return {
      activeTab: null,
      tags: [],
      products: {},
      loading: false,
      loader: useLoaderStore()
    };
  },
  computed: {
    filteredProducts() {
      return this.activeTab ? (this.products[this.activeTab] || []) : [];
    },
    activeTagName() {
      const activeTag = this.tags.find(tag => tag.id === this.activeTab);
      return activeTag ? activeTag.name : 'Productos';
    }
  },
  async created() {
    await this.loadTagsAndProducts();
  },
  methods: {
    setActiveTab(tagId) {
      this.activeTab = tagId;
      if (!this.products[tagId]) {
        this.loadProductsForTag(tagId);
      }
    },
    async loadTagsAndProducts() {
      this.loader.show() // Aquí usas loader directamente desde data
      const notificationStore = useNotificationStore();

      try {
        this.tags = await api.getActiveTags();

        if (this.tags.length > 0) {
          this.activeTab = this.tags[0].id;
          await this.loadProductsForTag(this.activeTab);
        }
      } catch (error) {
        console.error("❌ Error al cargar tags y productos:", error);
        notificationStore.showNotification(
            error.message || "Error al cargar las etiquetas",
            "error"
        );
      } finally {
        this.loader.hide() // Aquí también
      }
    },
    async loadProductsForTag(tagId) {
      this.loader.show()
      const notificationStore = useNotificationStore();

      try {
        const response = await api.getProductsByTag(tagId);
        this.products = {
          ...this.products,
          [tagId]: response.products || []
        };
      } catch (error) {
        console.error(`❌ Error al cargar productos para tag ${tagId}:`, error);
        notificationStore.showNotification(
            error.message || "Error al cargar productos",
            "error"
        );
      } finally {
        this.loader.hide()
      }
    }
  }
};
</script>

<style scoped>
/* Estilos generales para los productos */
.tp-product-area {
  margin-bottom: 3rem;
}

.tp-product-thumb img {
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.tp-product-item:hover .tp-product-action {
  right: 10px;
  opacity: 1;
}

.tp-product-category > a {
  font-size: 12px;
  font-weight: 500;
  color: #55585b;
  text-decoration: none;
  display: block;
  margin-bottom: -10px;
}

.tp-product-title > a {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
}

.tp-product-rating-icon span {
  color: #ffc107;
  font-size: 12px;
}

.tp-product-rating-text span {
  color: #55585b;
  font-family: "Jost", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 26px;
  margin-left: 5px;
}

.tp-product-tab-content {
  margin-top: 3rem;
}

.tp-section-title {
  position: relative;
  display: inline-block;
  font-size: 36px;
  font-weight: 600;
  color: var(--tp-heading-secondary);
}

.tp-section-title svg {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}
/* Estilos para los tabs de tags */
/* Estilos mejorados para los tabs de tags */
.tp-product-tab .nav-tabs {
  border-bottom: none;
  gap: 12px; /* Reducir espacio entre tags */
  padding: 0;
  margin: 0;
}

.tp-product-tab .nav-item {
  position: relative;
  margin: 0;
  padding: 0;
}

.tp-product-tab .nav-link {
  position: relative;
  padding: 0 0 15px 0;
  margin: 0;
  border: none;
  background: transparent;
  color: var(--tp-text-3);
  font-size: 20px;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap; /* Evitar saltos de línea */
  display: inline-block;
}

.tp-product-tab .nav-link.active {
  color: #000;
  font-weight: 600;
  background: transparent;
  transform: translateY(0); /* Eliminar cualquier desplazamiento */
}

.tp-product-tab .nav-link .tab-text {
  position: relative;
  display: inline-block;
  z-index: 2;
  padding: 0 5px; /* Pequeño padding para el texto */
}

.tp-product-tab-line {
  position: absolute;
  bottom: 3px; /* Ajustar posición vertical */
  left: 0;
  width: 100%;
  height: 13px;
  z-index: 1;
  overflow: hidden; /* Evitar que la línea sobresalga */
}

.tp-product-tab-line svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 10px); /* Ajustar ancho */
  height: 100%;
  margin: 0 5px; /* Centrar la línea */
}

/* Efecto hover más sutil */
.tp-product-tab .nav-link:not(.active):hover {
  color: #000;
  transform: none; /* Eliminar transformaciones en hover */
}

/* Ajuste para contenedor principal */
.tp-product-tab {
  overflow: hidden; /* Contener cualquier elemento que sobresalga */
}

/* Asegurar que no haya desbordamiento horizontal */
.tp-product-tab-border {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 5px; /* Espacio para scroll si es necesario */
}
</style>