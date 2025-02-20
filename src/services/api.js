import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, // Usa la variable de entorno
});
export default {
    register(userData) {
        return api.post('/v1/register', userData); // Ruta relativa para el registro
    },
    login(userData) {
        return api.post('/v1/login', userData);
    }
};