import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null,
        isAuthenticated: false,
    }),
    actions: {
        async checkAuth() {
            try {
                const userData = JSON.parse(localStorage.getItem("user"));

                if (userData) {
                    this.user = userData;
                    this.isAuthenticated = true; // ✅ Usuario autenticado
                } else {
                    this.user = null;
                    this.isAuthenticated = false; // ❌ No autenticado
                }
            } catch (error) {
                console.error("❌ Error verificando autenticación:", error);
                this.user = null;
                this.isAuthenticated = false;
            }
        },
        setUser(user) {
            this.user = user;
            this.isAuthenticated = true; // Asegúrate de marcar como autenticado
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout() {
            this.user = null;
            localStorage.removeItem("user");
        }
    }
});
