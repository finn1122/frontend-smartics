<template>
  <div class="tp-product-details-tab-nav tp-tab">
    <nav>
      <div class="nav nav-tabs justify-content-center p-relative tp-product-tab" id="navPresentationTab" role="tablist">
        <button
            class="nav-link"
            :class="{ active: activeTab === 'description' }"
            @click="activeTab = 'description'"
        >
          Description
        </button>
        <button
            class="nav-link"
            :class="{ active: activeTab === 'additional' }"
            @click="activeTab = 'additional'"
        >
          Additional information
        </button>
        <button
            class="nav-link"
            :class="{ active: activeTab === 'reviews' }"
            @click="activeTab = 'reviews'"
        >
          Reviews ({{ product.reviews.length }})
        </button>
        <span id="productTabMarker" class="tp-product-details-tab-line"></span>
      </div>
    </nav>

    <div class="tab-content" id="navPresentationTabContent">
      <!-- Description Tab -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'description' }">
        <div class="tp-product-details-desc-wrapper pt-80">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="tp-product-details-desc-item pb-105">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="tp-product-details-desc-content pt-25">
                      <span>{{ product.category }}</span>
                      <h3 class="tp-product-details-desc-title">{{ product.name }}</h3>
                      <p>{{ product.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Info Tab -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'additional' }">
        <div class="tp-product-details-additional-info">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <table>
                <tbody>
                <tr v-for="(info, index) in product.additionalInfo" :key="index">
                  <td>{{ info.label }}</td>
                  <td>{{ info.value }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Tab -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'reviews' }">
        <div class="tp-product-details-review-wrapper pt-60">
          <div class="row">
            <div class="col-lg-6">
              <div class="tp-product-details-review-statics">
                <div class="tp-product-details-review-number d-inline-block mb-50">
                  <h3 class="tp-product-details-review-number-title">Customer reviews</h3>
                  <div class="tp-product-details-review-summery d-flex align-items-center">
                    <div class="tp-product-details-review-summery-value">
                      <span>{{ product.rating }}</span>
                    </div>
                    <div class="tp-product-details-review-summery-rating d-flex align-items-center">
                      <span v-for="star in 5" :key="star">
                        <i class="fa-solid fa-star" :class="{ 'text-warning': star <= Math.round(product.rating) }"></i>
                      </span>
                      <p>({{ product.reviewsCount }} Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tp-product-details-review-list pr-110">
                <h3 class="tp-product-details-review-title">Rating &amp; Review</h3>
                <div>
                  <div
                      v-for="review in product.reviews"
                      :key="review.id"
                      class="tp-product-details-review-avater d-flex align-items-start"
                  >
                    <div class="tp-product-details-review-avater-thumb">
                      <a href="#"><img :src="review.avatar" :alt="review.user"></a>
                    </div>
                    <div class="tp-product-details-review-avater-content">
                      <div class="tp-product-details-review-avater-rating d-flex align-items-center">
                        <span v-for="star in 5" :key="star">
                          <i class="fa-solid fa-star" :class="{ 'text-warning': star <= review.rating }"></i>
                        </span>
                      </div>
                      <h3 class="tp-product-details-review-avater-title">{{ review.user }}</h3>
                      <span class="tp-product-details-review-avater-meta">{{ review.date }}</span>
                      <div class="tp-product-details-review-avater-comment">
                        <p>{{ review.comment }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="tp-product-details-review-form">
                <h3 class="tp-product-details-review-form-title">Review this product</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <form @submit.prevent="submitReview">
                  <div class="tp-product-details-review-form-rating d-flex align-items-center">
                    <p>Your Rating :</p>
                    <div class="tp-product-details-review-form-rating-icon d-flex align-items-center">
                      <span v-for="star in 5" :key="star" @click="newReview.rating = star">
                        <i class="fa-solid fa-star" :class="{ 'text-warning': star <= newReview.rating }"></i>
                      </span>
                    </div>
                  </div>

                  <div class="tp-product-details-review-input-wrapper">
                    <div class="tp-product-details-review-input-box">
                      <div class="tp-product-details-review-input">
                        <textarea v-model="newReview.comment" placeholder="Write your message here..."></textarea>
                      </div>
                      <div class="tp-product-details-review-input-title">
                        <label>Write Review</label>
                      </div>
                    </div>

                    <div class="tp-product-details-review-input-box">
                      <div class="tp-product-details-review-input">
                        <input v-model="newReview.name" type="text" placeholder="Your Name">
                      </div>
                      <div class="tp-product-details-review-input-title">
                        <label>Your Name</label>
                      </div>
                    </div>

                    <div class="tp-product-details-review-input-box">
                      <div class="tp-product-details-review-input">
                        <input v-model="newReview.email" type="email" placeholder="your@email.com">
                      </div>
                      <div class="tp-product-details-review-input-title">
                        <label>Your Email</label>
                      </div>
                    </div>
                  </div>

                  <div class="tp-product-details-review-suggetions mb-20">
                    <div class="tp-product-details-review-remeber">
                      <input id="remeber" type="checkbox" v-model="newReview.saveInfo">
                      <label for="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                  </div>

                  <div class="tp-product-details-review-btn-wrapper">
                    <button type="submit" class="tp-product-details-review-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductTabs',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeTab: 'description',
      newReview: {
        name: '',
        email: '',
        comment: '',
        rating: 0,
        saveInfo: false
      }
    }
  },
  methods: {
    submitReview() {
      // Validate and submit review
      if (this.newReview.rating === 0 || !this.newReview.comment || !this.newReview.name || !this.newReview.email) {
        alert('Please fill all required fields and provide a rating');
        return;
      }

      // Emit event or call API to submit review
      this.$emit('submit-review', {
        ...this.newReview,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      });

      // Reset form
      this.newReview = {
        name: this.newReview.saveInfo ? this.newReview.name : '',
        email: this.newReview.saveInfo ? this.newReview.email : '',
        comment: '',
        rating: 0,
        saveInfo: this.newReview.saveInfo
      };
    }
  }
}
</script>