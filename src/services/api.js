import axios from "axios";
import {useAuthStore} from "@/stores/authStore";
import { delay } from "@/utils/delay"; // Importa la función de retraso

const api = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    withCredentials: true // Importante para enviar cookies
});

// Interceptor para aplicar un retraso mínimo
api.interceptors.response.use(
    async (response) => {
        const startTime = Date.now(); // Guarda el tiempo de inicio

        // Retraso mínimo de 1 segundo (1000 ms)
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < 1000) {
            await delay(1000 - elapsedTime); // Espera el tiempo restante
        }

        return response; // Devuelve la respuesta
    },
    (error) => {
        return Promise.reject(error); // Maneja errores
    }
);


export default {
    async register(userData) {
        try {
            return await api.post("/register", userData); // Devuelve la respuesta completa
        } catch (error) {
            console.error("Error en el registro:", error);
            if (error.response) {
                throw new Error(error.response.data.message || "Error en el registro");
            } else {
                throw new Error("Error de conexión. Inténtalo de nuevo más tarde.");
            }
        }
    },
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
