import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, // Usa la variable de entorno
    withCredentials: true // Habilita el envío de cookies
});

export default {
    register(userData) {
        return api.post('/v1/register', userData);
    },
    login(userData) {
        return api.post('/v1/login', userData);
    },
    logout() {
        return api.post('/v1/logout'); // Endpoint en el backend para eliminar la cookie
    },
    getUserProfile() {
        return api.get('/v1/profile'); // Un endpoint protegido para obtener el perfil del usuario
    }
};
