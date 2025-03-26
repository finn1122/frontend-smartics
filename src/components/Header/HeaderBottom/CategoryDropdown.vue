<template>
  <div class="tp-header-category tp-category-menu">
    <button
        class="tp-category-menu-btn"
        @click.stop="toggleDropdown"
    >
      <span>
        <i class="fas fa-bars me-2"></i>
        All Categories
      </span>
      <i class="fas fa-angle-down ms-2"></i>
    </button>

    <nav v-if="isOpen && categories.length > 0">
      <ul class="category-dropdown-list">
        <li
            v-for="category in categories"
            :key="category.id"
            class="category-dropdown-item"
        >
          <a
              :href="`/shop/${category.path}`"
              class="category-dropdown-link"
          >
            <img
                v-if="category.imageUrl"
                :src="category.imageUrl"
                :alt="category.name"
                class="category-image me-2"
                width="20"
                height="20"
            >
            <span class="category-name">{{ category.name }}</span>
            <span class="product-count ms-2">({{ category.productsCount }})</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: "HeaderBottomCategoryDropdown",
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  setup() {
    const isOpen = ref(false);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const closeDropdownOnClickOutside = (event) => {
      if (!event.target.closest('.tp-category-menu')) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', closeDropdownOnClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', closeDropdownOnClickOutside);
    });

    return {
      isOpen,
      toggleDropdown
    };
  }
};
</script>

<style scoped>
.tp-header-category {
  position: relative;
}

.tp-category-menu-btn {
  background-color: var(--tp-theme-primary);
  color: var(--tp-common-white);
  padding: 12px 25px;
  font-size: 15px;
  border: none;
  font-weight: 500;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-dropdown-list {
  background: #fff;
  box-shadow: 0 1px 3px rgba(1, 15, 28, 0.1);
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 9;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
  transition: all 0.3s ease;
}

.category-dropdown-item {
  list-style: none;
  padding: 0 30px;
}

.category-dropdown-link {
  border-bottom: 1px solid var(--tp-border-primary);
  color: var(--tp-text-2);
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  padding: 13px 0 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-dropdown-link:hover {
  color: var(--tp-theme-primary);
}

.category-image {
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 10px;
}

.product-count {
  color: var(--tp-text-3);
  font-size: 14px;
  margin-left: auto;
}
</style>