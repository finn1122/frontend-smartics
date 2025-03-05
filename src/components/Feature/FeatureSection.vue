<template>
  <section class="tp-feature-area tp-feature-border-radius pb-70 d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row gx-1 gy-1 gy-xl-0 justify-content-center">
        <div
            v-for="(feature, index) in features"
            :key="index"
            class="col-xl-3 col-lg-6 col-md-6 col-sm-6"
        >
          <div class="col"> <!-- Ajusta la altura según tus necesidades -->
            <div class="tp-feature-item d-flex align-items-center">
              <div class="tp-feature-icon me-3">
                <font-awesome-icon :icon="feature.icon" size="2x" />
              </div>
              <div class="tp-feature-content">
                <h3 class="tp-feature-title">{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTruck, faUndo, faShieldAlt, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      features: [
        { icon: faTruck, title: "Free Delivery", description: "Orders from all items" },
        { icon: faUndo, title: "Return & Refund", description: "Money-back guarantee" },
        { icon: faShieldAlt, title: "Secure Payment", description: "100% secure payment" },
        { icon: faHeadset, title: "24/7 Support", description: "Dedicated support team" },
      ],
    };
  },
};
</script>

<style scoped>
.tp-feature-area {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tp-feature-item {
  display: flex;
  align-items: center; /* Centrado vertical */
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  height: 100%; /* Ocupa toda la altura del contenedor padre */
}

.tp-feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6f61;
}

.tp-feature-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra verticalmente el texto */
}

.tp-feature-item:hover {
  background: #eaeaea;
}
.tp-feature-icon {
  color: #ff6f61;
}
.tp-feature-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>
