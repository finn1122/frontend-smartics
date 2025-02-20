<template>
  <div v-if="visible" :class="['notification', type]">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'AppNotification', // Nombre del componente con más de una palabra

  props: {
    message: String,
    type: {
      type: String,
      default: 'success', // 'success' o 'error'
    },
    duration: {
      type: Number,
      default: 3000, // Duración en milisegundos
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, this.duration);
  },
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem;
  border-radius: 4px;
  color: white;
  z-index: 1000;
}

.notification.success {
  background-color: #4caf50; /* Verde para éxito */
}

.notification.error {
  background-color: #f44336; /* Rojo para errores */
}
</style>