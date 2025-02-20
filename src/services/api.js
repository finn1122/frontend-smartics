import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, // Usa la variable de entorno
});

export default api;