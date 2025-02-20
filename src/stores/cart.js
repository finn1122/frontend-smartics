import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [], // Productos en el carrito
    }),
    actions: {
        addItem(product) {
            this.items.push(product);
        },
        removeItem(productId) {
            this.items = this.items.filter(item => item.id !== productId);
        },
    },
    getters: {
        totalItems: (state) => state.items.length, // Total de items en el carrito
    },
});