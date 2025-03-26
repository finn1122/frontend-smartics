<template>
  <div class="tp-header-action">
    <component
        :is="isButton ? 'button' : 'a'"
        :href="isButton ? null : href"
        :class="['tp-header-action-btn', customClass]"
        @click="handleClick"
    >
      <i :class="['fas', `fa-${icon}`]"></i>
      <span v-if="badgeCount !== null" class="tp-header-action-badge">
        {{ badgeCount }}
      </span>
    </component>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderActions',
  props: {
    icon: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: '#'
    },
    badgeCount: {
      type: Number,
      default: null
    },
    isButton: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
});
</script>

<style scoped>
.tp-header-action {
  margin-right: 25px;
  position: relative;
  display: inline-block;
}

.tp-header-action:last-child {
  margin-right: 0;
}

.tp-header-action-btn {
  color: var(--tp-common-black);
  display: inline-block;
  font-size: 20px;
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.tp-header-action-btn:hover {
  color: #007bff;
}

.tp-header-action-badge {
  background-color: var(--tp-pink-1);
  border: 2px solid var(--tp-common-white);
  border-radius: 50%;
  color: var(--tp-common-white);
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  height: 23px;
  line-height: 20px;
  position: absolute;
  right: -13px;
  text-align: center;
  top: -6px;
  width: 23px;
}

/* Clases para responsive design */
.d-none {
  display: none !important;
}

.d-lg-flex {
  display: none !important;
}

@media (min-width: 992px) {
  .d-lg-flex {
    display: flex !important;
  }
}
</style>