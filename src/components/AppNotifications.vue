<template>
  <div>
    <div v-if="visible" class="notification" :class="type">
      {{ message }}
      <button @click="closeNotification">Cerrar</button>
    </div>
  </div>
</template>

<script>
import { useNotificationStore } from '@/stores/notificationStore';
import { storeToRefs } from 'pinia';

export default {
  name: 'AppNotifications',
  setup() {
    const notificationStore = useNotificationStore();
    const { visible, message, type } = storeToRefs(notificationStore); // <-- ¡Aquí está el cambio!

    const testNotification = () => {
      notificationStore.showNotification('Esta es una notificación de prueba', 'success');
    };

    return {
      visible,
      message,
      type,
      closeNotification: notificationStore.closeNotification,
      testNotification,
    };
  },
};

</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px; /* Cambiado para mostrar en la parte superior */
  right: 20px; /* Mantiene la posición a la derecha */
  padding: 15px 20px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  max-width: 400px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

/* Colores adecuados para cada tipo de notificación */
.notification.info {
  background-color: #007bff; /* Azul informativo */
}

.notification.success {
  background-color: #28a745; /* Verde más fuerte para éxito */
}

.notification.error {
  background-color: #dc3545; /* Rojo para errores */
}

.notification.danger {
  background-color: #ff9800; /* Naranja para advertencias o peligro */
}

button {
  margin-left: 15px;
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
}
</style>