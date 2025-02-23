import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Importa Pinia
import App from './App.vue';
import router from './router';
import './styles/global.css';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const app = createApp(App);
const pinia = createPinia(); // Crea una instancia de Pinia

app.use(pinia); // Usa Pinia en la aplicación
app.use(router); // Usa Vue Router
app.mount('#app');