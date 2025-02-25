import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';        // Nombre actualizado
import ProductsPage from '../views/ProductsPage.vue'; // Nombre actualizado
import LoginPage from '../components/auth/LoginApp.vue';      // Nombre actualizado
import CartPage from '../views/CartPage.vue';
import RegisterApp from "@/components/auth/RegisterApp.vue";        // Nombre actualizado

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductsPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterApp},
    { path: '/cart', component: CartPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;