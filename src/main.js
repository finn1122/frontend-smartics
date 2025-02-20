import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Importa Pinia
import App from './App.vue';
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
const pinia = createPinia(); // Crea una instancia de Pinia

app.use(pinia); // Usa Pinia en la aplicación
app.use(router); // Usa Vue Router
app.mount('#app');