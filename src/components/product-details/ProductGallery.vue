<template>
  <div class="tp-product-details-thumb-wrapper tp-tab d-sm-flex">
    <nav>
      <div class="nav nav-tabs flex-sm-column" id="productDetailsNavThumb" role="tablist">
        <button
            v-for="(image, index) in images"
            :key="index"
            class="nav-link"
            :class="{ active: activeImage === index }"
            @click="changeImage(index)"
        >
          <img :src="image" :alt="'Product image ' + (index + 1)">
        </button>
      </div>
    </nav>
    <div class="tab-content m-img" id="productDetailsNavContent">
      <div>
        <div class="tp-product-details-nav-main-thumb" style="background-color: rgb(245, 246, 248);">
          <img :src="images[activeImage]" :alt="'Product main image'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGallery',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeImage: 0
    }
  },
  methods: {
    changeImage(index) {
      this.activeImage = index;
    }
  }
}
</script>