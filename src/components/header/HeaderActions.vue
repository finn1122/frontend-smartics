
<template>
  <div class="tp-header-main-right d-flex align-items-center justify-content-end">
    <!-- Perfil de Usuario (Oculto en móviles, visible en desktop) -->
    <div class="tp-header-login d-none d-lg-block">
      <a v-if="authStore.isAuthenticated" href="/profile" class="d-flex align-items-center user-profile">
        <div class="tp-header-login-icon">
          <div class="icon-circle">
            <i class="fas fa-user icon"></i>
          </div>
        </div>
        <div class="tp-header-login-content d-none d-xl-block">
          <span>Bienvenido, {{ authStore.user?.name }}</span>
          <h5 class="tp-header-login-title">Tu Cuenta</h5>
        </div>
      </a>

      <router-link v-else to="/login" class="login-link">
        <span>Hola, Inicia Sesión</span>
        <h5 class="tp-header-login-title">Tu Cuenta</h5>
      </router-link>
    </div>

    <!-- Acciones del Usuario -->
    <div class="tp-header-action d-flex align-items-center">
      <!-- Comparar (Oculto en móviles) -->
      <div class="tp-header-action-item d-none d-lg-flex">
        <a href="/compare" class="tp-header-action-btn">
          <i class="fas fa-exchange-alt icon"></i>
        </a>
      </div>

      <!-- Wishlist (Oculto en móviles) -->
      <div class="tp-header-action-item d-none d-lg-flex">
        <a href="/wishlist" class="tp-header-action-btn">
          <i class="fas fa-heart icon"></i>
          <span class="tp-header-action-badge">0</span>
        </a>
      </div>

      <!-- Carrito (Siempre visible) -->
      <div class="tp-header-action-item">
        <button type="button" class="tp-header-action-btn cartmini-open-btn">
          <i class="fas fa-shopping-cart icon"></i>
          <span class="tp-header-action-badge">0</span>
        </button>
      </div>

      <!-- Menú para móviles (Siempre visible en móviles) -->
      <div class="tp-header-action-item d-lg-none">
        <button type="button" class="tp-header-action-btn tp-offcanvas-open-btn" @click="toggleMobileMenu">
          <i class="fas fa-bars icon"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Menú de navegación para móviles -->
  <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="toggleMobileMenu"></div>
  <div :class="['mobile-menu', { 'open': mobileMenuOpen }]">
    <button class="close-btn" @click="toggleMobileMenu">&times;</button>
    <ul class="mobile-menu-list">
      <li>
        <a href="/profile"><i class="fas fa-user"></i> Mi Cuenta</a>
      </li>
      <li>
        <a href="/compare"><i class="fas fa-exchange-alt"></i> Comparar</a>
      </li>
      <li>
        <a href="/wishlist"><i class="fas fa-heart"></i> Wishlist</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { onMounted, ref } from "vue";

export default {
  name: "HeaderActions",
  setup() {
    const authStore = useAuthStore();
    const isLoading = ref(true); // Indicador de carga

    onMounted(async () => {
      console.log("📢 Cargando el header, ejecutando checkAuth()...");
      await authStore.checkAuth(); // Esperar a que termine
      isLoading.value = false; // Deshabilitar loading
      console.log("✅ checkAuth() terminado, usuario autenticado:", authStore.isAuthenticated);
    });

    return {
      authStore,
      isLoading,
    };
  },
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>


<style scoped>
/* Fondo oscuro al abrir el menú */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
}

.mobile-menu.open + .mobile-menu-overlay {
  opacity: 1;
  visibility: visible;
}

/* Menú lateral móvil */
.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 260px;
  height: 100vh;
  background: #fff;
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 9999;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.mobile-menu.open {
  right: 0;
}

/* Cerrar botón */
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
}

/* Estilo lista */
.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin-top: 50px;
}

.mobile-menu-list li {
  padding: 12px 0;
  border-bottom: 1px solid #ddd;
}

.mobile-menu-list a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
}

.mobile-menu-list a i {
  font-size: 18px;
  color: #666;
}

/* Efecto hover */
.mobile-menu-list a:hover {
  color: #007bff;
}

.tp-header-action-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  margin-left: 10px;
  transition: color 0.2s;
}

.tp-header-action-btn:hover {
  color: #007bff;
}

/* Iconos dentro del header */
.tp-header-action .tp-header-action-item {
  position: relative;
}

.tp-header-action-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Estilos para el círculo alrededor del ícono de usuario */
.icon-circle {
  width: 40px; /* Tamaño del círculo */
  height: 40px; /* Tamaño del círculo */
  background-color: #f0f0f0; /* Color de fondo del círculo */
  border-radius: 50%; /* Hace que el div sea un círculo */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; /* Asegura que no haya padding adicional */
}
.user-profile {
  text-decoration: none !important; /* Elimina el subrayado */
  color: inherit !important; /* Hereda el color del texto del padre */
}
.user-profile .greeting {
  font-size: 12px; /* Tamaño más pequeño para "Hello, Sign In" */
  color: #666; /* Color más suave */
}
.user-profile .account-title {
  margin: 0;
  font-size: 14px; /* Tamaño del texto "Your Account" */
  font-weight: bold;
}
.tp-header-login-content span {
  color: #767a7d;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  flex-direction: column;
  line-height: 1;
}
/* Icono Circular */
.tp-header-login-icon {
  margin-right: 10px;
}
.tp-header-login {
  display: flex;
  align-items: center;
}
.tp-header-login-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0;
  color: black;
}
.login-link {
  text-decoration: none; /* Elimina el subrayado del enlace */
  color: inherit; /* Hereda el color del texto */
}
</style>
