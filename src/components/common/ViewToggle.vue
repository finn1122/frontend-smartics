<template>
  <div class="view-toggle-container">
    <div class="tp-shop-top-tab tp-tab">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button
              class="nav-link"
              :class="{ active: currentView === 'grid' }"
              @click="changeView('grid')"
              aria-label="Grid view"
          >
            <font-awesome-icon :icon="['fas', 'th-large']" />
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
              class="nav-link"
              :class="{ active: currentView === 'list' }"
              @click="changeView('list')"
              aria-label="List view"
          >
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewToggle',
  props: {
    view: {
      type: String,
      default: 'grid',
      validator: value => ['grid', 'list'].includes(value)
    }
  },
  data() {
    return {
      currentView: this.view
    }
  },
  watch: {
    view(newVal) {
      this.currentView = newVal;
    }
  },
  methods: {
    changeView(view) {
      this.currentView = view;
      this.$emit('view-changed', view);
    }
  }
}
</script>

<style scoped>
.view-toggle-container {
  display: inline-block;
}
</style>