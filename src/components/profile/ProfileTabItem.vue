<template>
  <button
      class="nav-link"
      :class="{ active: activeTab === id }"
      :id="id"
      data-bs-toggle="tab"
      :data-bs-target="`#${target}`"
      type="button"
      role="tab"
      :aria-controls="target"
      :aria-selected="activeTab === id"
      :tabindex="activeTab === id ? 0 : -1"
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
    activeTab: String, // Se pasa el activeTab desde el componente padre
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

/* Hover */
.nav-link:hover {
  background-color: #0989ff0f; /* Fondo azul translúcido */
  color: var(--tp-theme-primary); /* Usa el color del tema */
}

/* Opción activa: mantiene el hover */
.nav-link.active {
  background-color: #0989ff0f; /* Mismo fondo que el hover */
  color: var(--tp-theme-primary); /* Mismo color que el hover */
  font-weight: 500; /* Mantiene el mismo grosor */
}
</style>
