import axios from "axios";
import { useAuthStore } from "@/stores/authStore";
import { delay } from "@/utils/delay"; // Función de retraso

// Instancia base de Axios
const api = axios.create({
    baseURL: `${process.env.VUE_APP_API_BASE_URL}/v1`, // URL base de la API
});

// 🔹 Interceptor para adjuntar el token en cada petición
api.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        if (authStore.token) {
            config.headers.Authorization = `Bearer ${authStore.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 🔹 Interceptor para manejar respuestas y token expirado
api.interceptors.response.use(
    async (response) => {
        const startTime = Date.now();
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime < 1000) {
            await delay(1000 - elapsedTime);
        }

        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            // Token expirado o sesión no válida
            const authStore = useAuthStore();
            authStore.logout();
            window.location.href = "/login"; // Redirige al login
        }

        return Promise.reject(error);
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
    async resendConfirmationEmail(userEmail) {
        try {
            return await api.post("/email/verification-notification", userEmail); // Devuelve la respuesta completa
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

            if (response.data.authenticated && response.data.token) {
                const authStore = useAuthStore();
                authStore.setAuth(response.data.user, response.data.token);
                return response.data;
            }

            return { authenticated: false, message: "Credenciales incorrectas" };
        } catch (error) {
            console.error("❌ Error en login:", error);
            throw new Error(error.response?.data?.error || "Error en el servidor");
        }
    },

    async logout() {
        const authStore = useAuthStore();
        try {
            const response = await api.post("/logout");
            authStore.logout(); // Cerrar sesión en el store
            return response.data;
        } catch (error) {
            console.error("❌ Error en logout:", error);

            // Cerrar sesión aunque falle la API (por seguridad)
            authStore.logout();

            // Obtener el mensaje de error de la API o definir uno genérico
            const errorMessage = error.response?.data?.message || "Error inesperado al cerrar sesión";

            throw new Error(errorMessage);
        }
    },

    async getUser(userId) {
        try {
            const response = await api.get(`/user/${userId}`);
            const userData = response.data;

            // Actualizar el store con los datos obtenidos
            const authStore = useAuthStore();
            authStore.setUser(userData);

            return userData; // Retorna los datos por si se necesitan en el componente
        } catch (error) {
            console.error("❌ Error al obtener el usuario:", error);
            throw new Error(error.response?.data?.message || "Error al obtener el usuario");
        }
    },
    async getTopCategories() {
        try {
            const response = await api.get(`/top-categories`);
            return  response.data;
        } catch (error) {
            console.error("❌ Error al obtener el categorias top:", error);
            throw new Error(error.response?.data?.message || "Error al obtener categorias top");
        }
    },

};
