// stores/loaderStore.js
import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
    state: () => ({
        isLoading: false
    }),
    actions: {
        show() {
            this.isLoading = true
        },
        hide() {
            this.isLoading = false
        }
    }
})