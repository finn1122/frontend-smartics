<template>
  <div class="tp-shop-top mb-5">
    <div class="row">
      <div class="col-xl-6">
        <div class="tp-shop-top-left d-flex align-items-center">
          <!-- View Toggle Buttons -->
          <div class="tp-shop-top-tab tp-tab">
            <ul class="nav nav-tabs" id="productTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    :class="{ active: internalView === 'grid' }"
                    @click="handleViewChange('grid')"
                >
                  <font-awesome-icon :icon="['fas', 'th-large']" />
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    :class="{ active: internalView === 'list' }"
                    @click="handleViewChange('list')"
                >
                  <font-awesome-icon :icon="['fas', 'bars']" />
                </button>
              </li>
            </ul>
          </div>

          <!-- Results Counter -->
          <div class="tp-shop-top-result" v-if="showResultsCounter">
            <p>Showing {{ resultsText || `1–${totalItems} of ${totalItems} results` }}</p>
          </div>
        </div>
      </div>

      <div class="col-xl-6">
        <div class="tp-shop-top-select text-md-end">
          <!-- Custom Dropdown -->
          <div
              class="nice-select undefined"
              tabindex="0"
              role="button"
              @click="toggleDropdown"
              @blur="isDropdownOpen = false"
          >
            <span class="current">{{ selectedLabel }}</span>
            <span class="dropdown-icon"></span>
            <ul
                class="list"
                role="menubar"
                v-if="isDropdownOpen"
            >
              <li
                  class="option"
                  role="menuitem"
                  v-for="option in sortOptions"
                  :key="option.value"
                  :class="{
                  selected: option.value === internalSortOption,
                  focus: option.value === internalSortOption
                }"
                  @click="handleSortChange(option.value)"
              >
                {{ option.label }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewControls',
  props: {
    // View props
    view: {
      type: String,
      default: 'grid',
      validator: value => ['grid', 'list'].includes(value)
    },

    // Sort props
    sortOption: {
      type: String,
      default: 'default'
    },
    sortOptions: {
      type: Array,
      default: () => [
        { value: "default", label: "Default Sorting" },
        { value: "low-to-high", label: "Low to High" },
        { value: "high-to-low", label: "High to Low" },
      ]
    },

    // Results counter props
    showResultsCounter: {
      type: Boolean,
      default: true
    },
    totalItems: {
      type: Number,
      default: 0
    },
    resultsText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      internalView: this.view,
      internalSortOption: this.sortOption,
      isDropdownOpen: false
    }
  },
  computed: {
    selectedLabel() {
      const selected = this.sortOptions.find(opt => opt.value === this.internalSortOption);
      return selected ? selected.label : this.sortOptions[0]?.label || 'Sort';
    }
  },
  watch: {
    view(newVal) {
      this.internalView = newVal;
    },
    sortOption(newVal) {
      this.internalSortOption = newVal;
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleViewChange(view) {
      this.internalView = view;
      this.$emit('view-change', view);
    },
    handleSortChange(option) {
      this.internalSortOption = option;
      this.isDropdownOpen = false;
      this.$emit('sort-change', option);
    }
  }
}
</script>