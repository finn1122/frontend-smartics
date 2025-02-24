import axios from "axios";

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    console.log("📡 Enviando solicitud a:", config.url);
    console.log("📤 Headers enviados:", config.headers);
    console.log("🍪 Cookies disponibles antes de enviar la petición:", document.cookie);
    return config;
});

// 🔍 Interceptor para registrar respuestas o errores
api.interceptors.response.use(
    (response) => {
        console.log("✅ Respuesta recibida de:", response.config.url);
        return response;
    },
    (error) => {
        console.error("❌ Error en respuesta de:", error.config?.url, error);
        return Promise.reject(error);
    }
);

export default {
    register(userData) {
        return api.post("/v1/register", userData);
    },
    login(userData) {
        return api.post("/v1/login", userData);
    },
    logout() {
        return api.post("/v1/logout");
    },
    getUserProfile() {
        return api.get("/v1/profile");
    },
};
