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
    async getAllCategories() {
        try {
            const response = await api.get(`/shop-categories`);
            return  response.data;
        } catch (error) {
            console.error("❌ Error al obtener el categorias top:", error);
            throw new Error(error.response?.data?.message || "Error al obtener categorias top");
        }
    },
    async getTopCategories() {
        try {
            const response = await api.get(`/categories/top`);
            return  response.data;
        } catch (error) {
            console.error("❌ Error al obtener el categorias top:", error);
            throw new Error(error.response?.data?.message || "Error al obtener categorias top");
        }
    },
    async getCategoryByPath(path) {
        try {
            const response = await api.get(`/categories/by-path/${path}`);
            return  response.data;
        } catch (error) {
            console.error("❌ Error al obtener la categoría por path:", error);
            throw new Error(error.response?.data?.message || "Error al obtener la categoría por path");
        }
    },
    async getProductsByCategory(categoryId) {
        try {
            const response = await api.get(`/categories/${categoryId}/products`);
            return  response.data;
        } catch (error) {
            console.error("❌ Error al obtener los products de la categoria:", error);
            throw new Error(error.response?.data?.message || "Error al obtener los products de la categoria");
        }
    },
    async searchProducts(params) {
        try {
            // Validamos que tengamos al menos un criterio de búsqueda
            if (!params.path && !params.term) {
                throw new Error("Se requiere al menos el path de categoría o un término de búsqueda");
            }

            // Construimos los parámetros para la API
            const requestParams = {};

            if (params.path) {
                requestParams.path = params.path;
            }

            if (params.term) {
                requestParams.search_term = params.term;
            }

            console.log('Enviando parámetros a API:', requestParams);

            const response = await api.get('/shop-categories/products/search', {
                params: requestParams
            });

            return response.data;

        } catch (error) {
            console.error("❌ Error al buscar productos:", error);

            const errorMessage = error.response?.data?.message ||
                error.message ||
                "Error al buscar productos";

            throw new Error(errorMessage);
        }
    },
    async getSliders() {
        try {
            const response = await api.get(`/sliders`);
            if(response.data.success){
                return  response.data.data;
            }
        } catch (error) {
            console.error("❌ Error al obtener los sliders:", error);
            throw new Error(error.response?.data?.message || "Error al obtener los sliders");
        }
    },
    // En tu archivo api.js - agregar estos métodos
    async getActiveTags() {
        try {
            const response = await api.get(`/tags`);
            if(response.data.success){
                return response.data.data;
            }
        } catch (error) {
            console.error("❌ Error al obtener tags activas:", error);
            throw new Error(error.response?.data?.message || "Error al obtener tags activas");
        }
    },
    async getProductsByTag(tagId) {
        try {
            const response = await api.get(`/tags/${tagId}/products`);
            if(response.data.success){
                return response.data;
            }
        } catch (error) {
            console.error("❌ Error al obtener productos por tag:", error);
            throw new Error(error.response?.data?.message || "Error al obtener productos por tag");
        }
    },

};
