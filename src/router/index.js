import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';        // Nombre actualizado
import ProductsPage from '../views/ProductsPage.vue'; // Nombre actualizado
import LoginPage from '../views/LoginPage.vue';      // Nombre actualizado
import CartPage from '../views/CartPage.vue';        // Nombre actualizado

const routes = [
    { path: '/', component: HomePage },
    { path: '/products', component: ProductsPage },
    { path: '/login', component: LoginPage },
    { path: '/cart', component: CartPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;