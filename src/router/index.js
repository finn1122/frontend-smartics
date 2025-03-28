import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';      // Nombre actualizado
import RegisterView from "@/views/RegisterView.vue";        // Nombre actualizado
import ConfirmEmail from '@/views/ConfirmEmail.vue'; // Ajusta la ruta según tu estructura
import HomeView from "@/views/HomeView.vue";
import CategoryPage from "@/components/product-category/CategoryPage.vue";
import SearchResults from "@/components/products/SearchResults.vue";
import ProductDetails from "@/components/product-details/ProductDetails.vue";
import ProfileView from "@/views/ProfileView.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView},
    { path: '/confirm-email', component: ConfirmEmail},
    { path: '/profile', component: ProfileView},
    {
        path: '/categoria/:path', // Ruta dinámica con el parámetro :path
        name: 'CategoryPage', // Nombre de la ruta (debe coincidir con el que usas en this.$router.push)
        component: CategoryPage, // Componente que se renderizará
        props: true, // Pasar los parámetros como props
    },
    {
        path: '/buscar/:path?',
        name: 'SearchResults',
        component: SearchResults,
        props: (route) => ({
            path: route.params.path,
            search: route.query.search // Asegúrate que coincida
        })
    },
    {
        path: '/:category/:subcategory?/:productname',
        name: 'product-details',
        component: ProductDetails,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;