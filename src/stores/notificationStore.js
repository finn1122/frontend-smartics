import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        visible: false,
        message: '',
        type: 'info', // Puede ser 'info', 'success', 'error'
    }),
    actions: {
        showNotification(message, type = 'info') {
            console.log("Mostrando notificación:", message, "Tipo:", type); // Agregar log para depuración
            this.message = message;
            this.type = type;
            this.visible = true;

            setTimeout(() => {
                this.visible = false;
            }, 5000);
        }
        ,
        closeNotification() {
            this.visible = false;
        },
    },
});