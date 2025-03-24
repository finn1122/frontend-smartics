<template>
  <div class="sort-dropdown">
    <div
        class="nice-select"
        tabindex="0"
        role="button"
        @click="toggleDropdown"
        @blur="closeDropdown"
    >
      <span class="current">{{ selectedLabel }}</span>
      <span class="dropdown-icon"></span>
      <ul
          class="list"
          role="menubar"
          v-if="isOpen"
      >
        <li
            class="option"
            role="menuitem"
            v-for="option in sortOptions"
            :key="option.value"
            :class="{
            selected: option.value === currentOption,
            focus: option.value === currentOption
          }"
            @click="selectOption(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// Definición de opciones como constantes reutilizables
const SORT_OPTIONS = {
  DEFAULT: 'default',
  PRICE_LOW_TO_HIGH: 'low-to-high',
  PRICE_HIGH_TO_LOW: 'high-to-low'
};

const DEFAULT_SORT_OPTIONS = [
  { value: SORT_OPTIONS.DEFAULT, label: "Default Sorting" },
  { value: SORT_OPTIONS.PRICE_LOW_TO_HIGH, label: "Price: Low to High" },
  { value: SORT_OPTIONS.PRICE_HIGH_TO_LOW, label: "Price: High to Low" }
];

export default {
  name: 'SortDropdown',
  props: {
    // Permite sobrescribir las opciones por defecto si es necesario
    customOptions: {
      type: Array,
      default: () => []
    },
    selectedOption: {
      type: String,
      default: SORT_OPTIONS.DEFAULT
    }
  },
  data() {
    return {
      currentOption: this.selectedOption,
      isOpen: false
    }
  },
  computed: {
    sortOptions() {
      // Usa las opciones personalizadas si existen, sino las por defecto
      return this.customOptions.length > 0 ? this.customOptions : DEFAULT_SORT_OPTIONS;
    },
    selectedLabel() {
      const option = this.sortOptions.find(opt => opt.value === this.currentOption);
      return option ? option.label : this.sortOptions[0]?.label || 'Sort';
    }
  },
  watch: {
    selectedOption(newVal) {
      this.currentOption = newVal;
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectOption(option) {
      this.currentOption = option;
      this.isOpen = false;
      this.$emit('option-changed', option);
    }
  }
}
</script>

<style scoped>
.sort-dropdown {
  display: inline-block;
}
</style>