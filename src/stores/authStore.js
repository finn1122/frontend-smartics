import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
        isAuthenticated: !!localStorage.getItem("token"),
    }),
    actions: {
        setAuth(user, token) {
            this.user = user;
            this.token = token;
            this.isAuthenticated = true;

            // Guardar en localStorage
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);
        },
        setUser(user) {
            this.user = user;

            // Actualizar solo el usuario en localStorage sin tocar el token
            localStorage.setItem("user", JSON.stringify(user));
        },
        async checkAuth() {
            try {
                const userData = JSON.parse(localStorage.getItem("user"));
                const storedToken = localStorage.getItem("token");

                if (userData && storedToken) {
                    this.user = userData;
                    this.token = storedToken;
                    this.isAuthenticated = true;
                } else {
                    this.user = null;
                    this.token = null;
                    this.isAuthenticated = false;
                }
            } catch (error) {
                console.error("❌ Error verificando autenticación:", error);
                this.logout();
            }
        },

        logout() {
            this.user = null;
            this.token = null;
            this.isAuthenticated = false;

            // Eliminar de localStorage
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }
});
