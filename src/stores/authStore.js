import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")) || null,
        isAuthenticated: false,
    }),
    actions: {
        async checkAuth() {
            console.log("🔄 Verificando autenticación...");

            try {
                const userData = JSON.parse(localStorage.getItem("user"));

                if (userData) {
                    this.user = userData;
                    this.isAuthenticated = true; // ✅ Usuario autenticado
                    console.log("✅ Usuario autenticado:", userData);
                } else {
                    this.user = null;
                    this.isAuthenticated = false; // ❌ No autenticado
                    console.log("⚠ No hay usuario autenticado.");
                }
            } catch (error) {
                console.error("❌ Error verificando autenticación:", error);
                this.user = null;
                this.isAuthenticated = false;
            }
        },
        setUser(user) {
            this.user = user;
            localStorage.setItem("user", JSON.stringify(user));
            console.log("✅ Usuario almacenado en el store y localStorage:", user);
        },
        logout() {
            this.user = null;
            localStorage.removeItem("user");
            console.log("🚪 Usuario cerró sesión, datos eliminados");
        }
    }
});
