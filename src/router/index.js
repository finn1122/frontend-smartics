import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';      // Nombre actualizado
import RegisterView from "@/views/RegisterView.vue";        // Nombre actualizado
import ConfirmEmail from '@/views/ConfirmEmail.vue'; // Ajusta la ruta según tu estructura
import ProfileView from "@/views/ProfileView.vue";
import HomeView from "@/views/HomeView.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView},
    { path: '/confirm-email', component: ConfirmEmail},
    { path: '/profile', component: ProfileView}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;