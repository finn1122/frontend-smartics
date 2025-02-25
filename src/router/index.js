import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/auth/LoginApp.vue';      // Nombre actualizado
import RegisterView from "@/views/RegisterView.vue";        // Nombre actualizado

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterView},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;