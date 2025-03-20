import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Importa Pinia
import App from './App.vue';
import AppLoader from '@/components/AppLoader.vue';
import router from './router';

// Importa Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowRight,
    faChevronLeft,
    faChevronRight,
    faTruck, // Icono para "Free Delivery"
    faUndo,  // Icono para "Return & Refund"
    faPercent, // Icono para "Member Discount"
    faHeadset, // Icono para "Support 24/7"
    faStar,
    faCartShopping,
    faEye,
    faHeart,
    faStarHalfStroke,
    faThLarge,
    faBars,
    faCodeCompare,
    faChartSimple,
    } from '@fortawesome/free-solid-svg-icons';

// Añade los iconos a la librería
library.add(
    faArrowRight,
    faChevronLeft,
    faChevronRight,
    faTruck,
    faUndo,
    faPercent,
    faHeadset,
    faStar,
    faCartShopping,
    faEye,
    faHeart,
    faStarHalfStroke,
    faThLarge,
    faBars,
    faCodeCompare,
    faChartSimple,
);

// Importa estilos globales
import './styles/global.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNotificationStore } from '@/stores/notificationStore';

const app = createApp(App);
const pinia = createPinia(); // Crea una instancia de Pinia

// Usa Pinia y Vue Router
app.use(pinia);
app.use(router);

// Registra el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Registra el componente AppLoader
app.component('AppLoader', AppLoader);

// Inyectar el store en la instancia de Vue
app.config.globalProperties.$notificationStore = useNotificationStore();

app.mount('#app'); // Monta la app antes de acceder al store

// ✅ Ahora que la app está montada, podemos acceder a authStore de forma segura
import { useAuthStore } from "@/stores/authStore";
const authStore = useAuthStore();
authStore.checkAuth && authStore.checkAuth(); // Aseguramos que la función exista