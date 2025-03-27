<template>
  <section class="tp-product-details-area">
    <CommonBreadcrumb
        :category="product.category"
        :subcategory="product.subcategory"
        :title="product.name"
        home-text="Home"
        class="product-details-breadcrumb"
    />
    <div class="tp-product-details-top pb-115">
      <div class="container">
        <div class="row">
          <div class="col-xl-7 col-lg-6">
            <ProductGallery :images="product.images" />
          </div>
          <div class="col-xl-5 col-lg-6">
            <ProductInfo :product="product" />
          </div>
        </div>
      </div>
    </div>
    <div class="tp-product-details-bottom pb-140">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <ProductTabs :product="product" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductGallery from './ProductGallery.vue';
import ProductInfo from './ProductInfo.vue';
import ProductTabs from './ProductTabs.vue';
import CommonBreadcrumb from "@/components/common/CommonBreadcrumb.vue";

export default {
  name: 'ProductDetails',
  components: {
    CommonBreadcrumb,
    ProductGallery,
    ProductInfo,
    ProductTabs
  },
  data() {
    return {
      product: {
        id: '641e887d05f9ee1717e1348a',
        name: 'Headphones Wireless.',
        category: 'Headphones',
        sku: 'NTB7SDVX44',
        tags: ['Android'],
        price: 103.20,
        oldPrice: 120,
        inStock: true,
        rating: 4.5,
        reviewsCount: 3,
        description: 'Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset ha...',
        images: [
          'https://i.ibb.co/WVdTgR8/headphone-1.png',
          'https://i.ibb.co/zh9x3Q0/headphone-2.png',
          'https://i.ibb.co/JBZk7sS/headphone-3.png',
          'https://i.ibb.co/SrPq3r0/headphone-4.png'
        ],
        colors: [
          { name: 'Purply Blue', code: '#C1BAE4' },
          { name: 'Light Grey', code: '#D8D7DD' },
          { name: 'Baby Pink', code: '#F3C0D1' },
          { name: 'Bluish Cyan', code: '#64BFD1' }
        ],
        additionalInfo: [
          { label: 'Standing screen display size', value: 'Screen display Size 10.4' },
          { label: 'Colors', value: 'Purply Blue, Light Grey, Baby Pink, Bluish Cyan' },
          { label: 'Screen Resolution', value: '1920 x 1200 Pixels' },
          { label: 'Max Screen Resolution', value: '2000 x 1200' },
          { label: 'Processor', value: '2.3 GHz (128 GB)' },
          { label: 'Graphics Coprocessor', value: 'Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)' },
          { label: 'Wireless Type', value: '802.11a/b/g/n/ac, Bluetooth' }
        ],
        reviews: [
          {
            id: 1,
            user: 'John doe',
            date: '06 March, 2023',
            rating: 5,
            comment: 'Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.',
            avatar: '/img/users/user-3.jpg'
          },
          {
            id: 2,
            user: 'Smith Doe',
            date: '07 March, 2023',
            rating: 5,
            comment: 'Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.',
            avatar: '/img/users/user-2.jpg'
          },
          {
            id: 3,
            user: 'Mark Smith',
            date: '09 March, 2023',
            rating: 5,
            comment: 'Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.',
            avatar: '/img/users/user-3.jpg'
          }
        ]
      }
    }
  },
  async created() {

  },
  methods: {

  }
}
</script>
<style scoped>
/* Ajuste específico para el breadcrumb en la página de detalles */
.tp-product-details-area :deep(.breadcrumb__area) {
  padding-top: 20px !important;
  padding-bottom: 20px;
}
</style>