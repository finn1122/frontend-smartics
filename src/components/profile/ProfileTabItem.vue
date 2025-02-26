<template>
  <button
      class="nav-link"
      :class="{ active }"
      :id="id"
      data-bs-toggle="tab"
      :data-bs-target="`#${target}`"
      type="button"
      role="tab"
      :aria-controls="target"
      :aria-selected="active"
      :tabindex="active ? 0 : -1"
      @click="$emit('update:activeTab', id)"
  >
    <span>
      <i :class="iconClass"></i>
    </span>
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ProfileTabItem',
  props: {
    id: String,
    target: String,
    iconClass: String,
    label: String,
    active: Boolean,
  },
};
</script>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 14px 30px;
  background-color: var(--tp-common-white);
  border: 0;
  border-radius: 0;
  color: #767a7d;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  transition: all 0.3s ease;
}

.nav-link.active {
  background-color: #072f550f;
  color: #8f8f8f;
}

.nav-link.active:hover {
  background-color: #0097ff0f;
  color: #8f8f8f;
}

.nav-link:not(.active):hover {
  background-color: var(--tp-common-white);
  color: #767a7d;
}
</style>
