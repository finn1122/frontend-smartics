import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

const api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    withCredentials: true // Importante para enviar cookies
});

export default {
    async login(userData) {
        try {
            const response = await api.post("/login", userData);

            if (response.data.authenticated) {
                const authStore = useAuthStore();
                authStore.setUser(response.data.user); // Guardamos el usuario en el store

                console.log("🍪 Cookies después del login:", document.cookie);

                return response.data;
            }

            return { authenticated: false, message: "Credenciales incorrectas" };
        } catch (error) {
            console.error("❌ Error en login:", error);
            throw new Error(error.response?.data?.message || "Error en el servidor");
        }
    },

    async logout() {
        try {
            await api.post("/logout");
            const authStore = useAuthStore();
            authStore.logout();
        } catch (error) {
            console.error("❌ Error en logout:", error);
        }
    }
};
