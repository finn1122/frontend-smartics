<template>
  <div class="tp-header-main-right d-flex align-items-center justify-content-end">
    <!-- Perfil de Usuario (Oculto en móviles, visible en desktop) -->
    <div class="tp-header-login d-none d-lg-block">
      <!-- Cuando el usuario ha iniciado sesión -->
      <a v-if="authStore.isAuthenticated" href="/profile" class="d-flex align-items-center user-profile">
        <div class="tp-header-login-icon">
          <div class="icon-circle">
            <i class="fas fa-user icon"></i> <!-- Ícono de Font Awesome -->
          </div>
        </div>
        <div class="tp-header-login-content d-none d-xl-block">
          <span>Bienvenido, {{ authStore.user?.name }}</span>
          <h5 class="tp-header-login-title">Tu Cuenta</h5>
        </div>
      </a>

      <!-- Cuando el usuario no ha iniciado sesión -->
      <router-link v-else to="/login" class="d-flex align-items-center login-link">
        <div class="tp-header-login-icon">
          <div class="icon-circle">
            <i class="fas fa-user icon"></i> <!-- Ícono de Font Awesome -->
          </div>
        </div>
        <div class="tp-header-login-content d-none d-xl-block">
          <span>Hola, Inicia Sesión</span>
          <h5 class="tp-header-login-title">Tu Cuenta</h5>
        </div>
      </router-link>
    </div>

    <!-- Acciones del Usuario -->
    <div class="tp-header-action d-flex align-items-center ml-50">
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
      <!-- Perfil de Usuario -->
      <li v-if="authStore.isAuthenticated">
        <a href="/profile">
          <i class="fas fa-user"></i> Mi Cuenta
        </a>
      </li>
      <li v-else>
        <a href="/login">
          <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
        </a>
      </li>

      <!-- Comparar -->
      <li>
        <a href="/compare">
          <i class="fas fa-exchange-alt"></i> Comparar
        </a>
      </li>

      <!-- Wishlist -->
      <li>
        <a href="/wishlist">
          <i class="fas fa-heart"></i> Wishlist
          <span class="badge">0</span>
        </a>
      </li>

      <!-- Carrito -->
      <li>
        <a href="#" class="cartmini-open-btn">
          <i class="fas fa-shopping-cart"></i> Carrito
          <span class="badge">0</span>
        </a>
      </li>

      <!-- Cerrar Sesión (Solo si está autenticado) -->
      <li v-if="authStore.isAuthenticated">
        <a href="#" @click="logout">
          <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";

export default defineComponent({
  name: "HeaderActions",
  setup() {
    const authStore = useAuthStore();
    const isLoading = ref(true); // Indicador de carga

    // ✅ Computed para obtener el estado de autenticación
    const isAuthenticated = computed(() => authStore.isAuthenticated);

    onMounted(async () => {
      console.log("📢 Cargando el Header, ejecutando checkAuth()...");
      await authStore.checkAuth(); // ✅ Esperamos la verificación
      isLoading.value = false; // ⏳ Deshabilitamos el loading
      console.log("✅ checkAuth() terminado, autenticado:", isAuthenticated.value);
    });

    const mobileMenuOpen = ref(false);

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    return {
      authStore,
      isLoading,
      isAuthenticated, // ✅ Hacer accesible en el template
      mobileMenuOpen,
      toggleMobileMenu,
    };
  }
});
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
.align-items-center {
  align-items: center !important;
}
.justify-content-end {
  justify-content: flex-end !important;
}
.d-flex {
  display: flex !important
;
}
a, button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
}

a {
  text-decoration: none;
}
.ml-50 {
  margin-left: 50px;
}
.tp-header-action-item {
  margin-right: 15px; /* Espaciado proporcional */
  position: relative;
}

.tp-header-action-item:last-child {
  margin-right: 0;
}
.tp-header-action-btn {
  color: var(--tp-common-black); /* Negro por defecto */
  display: inline-block;
  font-size: 20px;
  position: relative;
  transition: color 0.3s ease-in-out; /* Efecto suave */
}
.tp-header-action-btn:hover {
  color: #007bff; /* Azul */
}
.tp-header-action-badge {
  background-color: var(--tp-pink-1);
  border: 2px solid var(--tp-common-white);
  border-radius: 50%;
  color: var(--tp-common-white);
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  height: 23px;
  line-height: 20px;
  position: absolute;
  right: -13px;
  text-align: center;
  top: -6px;
  width: 23px;
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
}
@media (min-width: 768px) {
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
}
.col-6 {
  flex: 0 0 auto;
  width: 50%;
}
</style>
