<template>
  <div class="tp-header-search-2 d-none d-sm-block">
    <form @submit.prevent="handleSearch">
        <!-- Campo de Búsqueda -->
        <div class="tp-header-search-box">
          <input
              type="text"
              placeholder="Search for Products..."
              v-model="searchQuery"
              class="search-input"
          />
        </div>
        <!-- Botón de Búsqueda -->
        <div class="tp-header-search-btn">
          <button type="submit" class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
    </form>
  </div>
</template>

<script>
import { useNotificationStore } from "@/stores/notificationStore";

export default {
  name: "HeaderSearch2",
  setup() {
    const notificationStore = useNotificationStore();
    return { notificationStore };
  },
  data() {
    return {
      searchQuery: "",
      isDropdownOpen: false,
      allCategories: [],
    };
  },
  async created() {
    document.addEventListener("click", this.closeDropdownOnClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdownOnClickOutside);
  },
  methods: {
    handleSearch() {
      if (!this.searchQuery) return;

      const routeParams = {
        name: "SearchResults",
        params: {},
        query: {},
      };

      if (this.searchQuery) {
        routeParams.query.search = this.searchQuery.trim();
      }

      this.$router.push(routeParams);
    },
    closeDropdownOnClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
};
</script>


<style scoped>
.tp-header-search-2 {
  position: relative;
  width: 100%;
}

.tp-header-search-2 input {
  background: var(--tp-grey-4);
  border: 1px solid rgba(1, 15, 28, .1);
  height: 46px;
  padding-left: 24px;
  padding-right: 50px;
  width: 100%;
  font-size: 14px;
  color: var(--tp-common-black);
  outline: none;
}

.tp-header-search-2 button {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
  cursor: pointer;
  font-size: 20px;
}

@media (min-width: 576px) {
  .d-sm-block {
    display: block !important;
  }
}
</style>