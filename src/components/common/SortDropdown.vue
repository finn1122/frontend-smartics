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
            v-for="option in options"
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
export default {
  name: 'SortDropdown',
  props: {
    options: {
      type: Array,
      default: () => [
        { value: "default", label: "Default Sorting" },
        { value: "low-to-high", label: "Low to High" },
        { value: "high-to-low", label: "High to Low" },
      ]
    },
    selectedOption: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      currentOption: this.selectedOption,
      isOpen: false
    }
  },
  computed: {
    selectedLabel() {
      const option = this.options.find(opt => opt.value === this.currentOption);
      return option ? option.label : this.options[0]?.label || 'Sort';
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