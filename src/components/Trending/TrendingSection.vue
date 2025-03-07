<template>
  <section class="tp-product-area pb-55">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-5 col-lg-6 col-md-5">
          <div class="tp-section-title-wrapper mb-40">
            <h3 class="tp-section-title">
              {{ activeTab === 'new' ? 'New Products' : 'Top Sellers' }}
              <svg width="114" height="35" viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 30 C10 20, 30 10, 60 15 C90 20, 100 10, 113 5" stroke="#B2DFDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </h3>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 col-md-7">
          <div class="tp-product-tab tp-product-tab-border mb-45 tp-tab d-flex justify-content-md-end">
            <ul class="nav nav-tabs justify-content-sm-end" id="productTab">
              <li class="nav-item">
                <button
                    class="nav-link"
                    :class="{ active: activeTab === 'new' }"
                    @click="setActiveTab('new')"
                >
                  New
                  <span class="tp-product-tab-line" v-if="activeTab === 'new'">
                    <svg width="52" height="13" viewBox="0 0 52 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635" stroke="#B2DFDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </button>
              </li>
              <li class="nav-item">
                <button
                    class="nav-link"
                    :class="{ active: activeTab === 'top-sellers' }"
                    @click="setActiveTab('top-sellers')"
                >
                  Top Sellers
                  <span class="tp-product-tab-line" v-if="activeTab === 'top-sellers'">
                    <svg width="52" height="13" viewBox="0 0 52 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8.97127C11.6061 -5.48521 33 3.99996 51 11.4635" stroke="#B2DFDB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
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
                <ProductItem :product="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductItem from '@/components/Product/ProductItem.vue';

export default {
  name: 'TrendingSection',
  components: {
    ProductItem,
  },
  data() {
    return {
      activeTab: 'new', // Pestaña activa por defecto
      newProducts: [
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 120,
          newPrice: 103.20
        },
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 120,
          newPrice: 103.20
        },
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 120,
          newPrice: 103.20
        },
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 120,
          newPrice: 103.20
        },
      ],
      topSellersProducts: [
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 150,
          newPrice: 125.20
        },
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 150,
          newPrice: 125.20
        },
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 150,
          newPrice: 125.20
        },
        {
          id: 1,
          link: "/product-details/641e887d05f9ee1717e1348a",
          image: "https://i.ibb.co/WVdTgR8/headphone-1.png",
          alt: "product-electronic",
          category: "Headphones",
          title: "Headphones Wireless.",
          rating: [1, 1, 1, 1, 0.5],
          reviews: 3,
          oldPrice: 150,
          newPrice: 125.20
        },
      ]
    };
  },
  computed: {
    filteredProducts() {
      return this.activeTab === 'new' ? this.newProducts : this.topSellersProducts;
    },
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
/* Estilos generales para los productos */
.tp-product-area {
  margin-bottom: 3rem;
}

.tp-product-thumb {
  position: relative;
  overflow: hidden;
  border: 1px solid #eaebed;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px;
}

.tp-product-thumb img {
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.tp-product-item {
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tp-product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.tp-product-item:hover .tp-product-thumb img {
  transform: scale(1.1);
}

.tp-product-action {
  position: absolute;
  bottom: 40px;
  right: -100px;
  opacity: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.tp-product-item:hover .tp-product-action {
  right: 10px;
  opacity: 1;
}

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

.tp-product-action-btn:first-child {
  border-radius: 5px 5px 0 0;
}

.tp-product-action-btn:last-child {
  border-radius: 0 0 5px 5px;
}

.tp-product-action-btn:hover {
  background-color: #f0f0f0;
}

.icon-rectangle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

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

.tp-product-action-btn:hover .tp-product-tooltip {
  visibility: visible;
  opacity: 1;
  left: -110px;
}

.tp-product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff0000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
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

.tp-product-price.old-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 5px;
}

.tp-product-price.new-price {
  color: #007bff;
  font-weight: 600;
}

.tp-product-content {
  padding: 10px 30px 20px;
  border-left: 1px solid #eaebed;
  border-right: 1px solid #eaebed;
  border-bottom: 1px solid #eaebed;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.tp-product-tab-content {
  margin-top: 3rem;
}

.tp-section-title {
  position: relative;
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.tp-section-title svg {
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}

@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
    margin-bottom: 20px; /* Ajusta este valor según sea necesario */
  }
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}
</style>