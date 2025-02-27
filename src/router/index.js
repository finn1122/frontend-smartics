import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from "@/views/RegisterView.vue";
import ConfirmEmail from '@/views/ConfirmEmail.vue';
import ProfileView from "@/views/ProfileView.vue";

const routes = [
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/confirm-email', component: ConfirmEmail },
    { path: '/profile', component: ProfileView }
];

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/frontend-smartics/' : '/'), // Ajusta '/repo-name/' al nombre de tu repositorio
    routes,
});

export default router;