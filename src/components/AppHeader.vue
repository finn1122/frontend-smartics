<template>
  <header class="app-header">
    <!-- Logo de la tienda -->
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Logo de la tienda" />
      </router-link>
    </div>

    <!-- Menú de navegación -->
    <nav class="nav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/products">Productos</router-link>
    </nav>

    <!-- Carrito y opción de inicio de sesión -->
    <div class="user-actions">
      <router-link to="/cart" class="cart-link">
        <i class="fas fa-shopping-cart"></i> <!-- Ícono de FontAwesome -->
        <span v-if="cartStore.totalItems > 0" class="cart-count">
          {{ cartStore.totalItems }}
        </span>
      </router-link>
      <div class="user-icon" @click="toggleAuthModal">
        <i class="fas fa-user"></i> <!-- Ícono de FontAwesome -->
      </div>
    </div>

    <!-- Modal de autenticación (fuera del Header) -->
    <AuthModal v-if="showAuthModal" @close="showAuthModal = false" />
  </header>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import AuthModal from '@/components/AuthModal.vue';

export default {
  components: { AuthModal },
  data() {
    return {
      showAuthModal: false, // Controla la visibilidad del modal
    };
  },
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  methods: {
    toggleAuthModal() {
      this.showAuthModal = !this.showAuthModal;
    },
  },
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
  position: relative; /* Para posicionar el modal correctamente */
}

.logo img {
  height: 40px;
}

.nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
}

.nav a:hover {
  color: #007bff;
}

.user-actions {
  display: flex;
  align-items: center; /* Alinea los íconos verticalmente */
  gap: 1rem; /* Espacio entre los íconos */
}

.cart-link {
  position: relative;
  display: inline-block;
}

.cart-link i {
  font-size: 1.5rem;
  color: #333; /* Color del ícono */
}

.cart-link:hover i {
  color: #007bff; /* Cambia el color al pasar el mouse */
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
}

.user-icon {
  cursor: pointer;
  font-size: 1.5rem;
  color: #333; /* Color del ícono */
}

.user-icon:hover {
  color: #007bff; /* Cambia el color al pasar el mouse */
}
</style>