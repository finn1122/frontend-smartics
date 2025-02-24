import { defineStore } from "pinia";
import api from "@/services/api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null,
        token: localStorage.getItem("token") || null,
        isAuthenticated: !!localStorage.getItem("token"),
    }),

    actions: {
        setToken(token) {
            this.token = token;
            this.isAuthenticated = true;
            localStorage.setItem("token", token);
        },

        setUser(user) {
            this.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },

        async login(userData) {
            try {
                const response = await api.login(userData);
                if (response.data.authenticated) {
                    console.log("✅ Login exitoso:", response.data);
                    this.setUser(response.data.user);
                    console.log("🍪 Cookies después del login:", document.cookie);

                }
            } catch (error) {
                console.error("❌ Error en login:", error);
                throw error;
            }
        },

        async checkAuth() {
            try {
                const response = await api.getUserProfile();
                this.setUser(response.data.user);
            } catch (error) {
                console.error("❌ Error obteniendo el perfil:", error);
                this.logout();
            }
        },

        logout() {
            this.token = null;
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});
