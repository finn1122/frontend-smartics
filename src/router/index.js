import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';      // Nombre actualizado
import RegisterView from "@/views/RegisterView.vue";        // Nombre actualizado
import ConfirmEmail from '@/views/ConfirmEmail.vue'; // Ajusta la ruta según tu estructura
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryVIew.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView},
    { path: '/confirm-email', component: ConfirmEmail},
    {
        path: '/categoria/:path', // Ruta dinámica con el parámetro :path
        name: 'CategoryPage', // Nombre de la ruta (debe coincidir con el que usas en this.$router.push)
        component: CategoryView, // Componente que se renderizará
        props: true, // Pasar los parámetros como props
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;