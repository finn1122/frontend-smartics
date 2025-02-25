import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';      // Nombre actualizado
import RegisterView from "@/views/RegisterView.vue";        // Nombre actualizado

const routes = [
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;