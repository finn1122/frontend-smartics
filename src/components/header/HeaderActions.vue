<template>
  <div class="tp-header-main-right d-flex align-items-center justify-content-end">
    <!-- Perfil de Usuario -->
    <div class="tp-header-login d-none d-lg-block">
      <a href="/profile" class="d-flex align-items-center user-profile">
        <div class="tp-header-login-icon">
          <i class="fas fa-user icon"></i> <!-- Icono de usuario -->
        </div>
        <div class="tp-header-login-content d-none d-xl-block">
          <span class="greeting">Hello, Sign In</span>
          <h5 class="account-title">Your Account</h5>
        </div>
      </a>
    </div>

    <!-- Acciones del Usuario (Comparar, Wishlist, Carrito) -->
    <div class="tp-header-action d-flex align-items-center">
      <!-- Comparar -->
      <div class="tp-header-action-item">
        <a href="/compare" class="tp-header-action-btn">
          <i class="fas fa-exchange-alt icon"></i> <!-- Icono de comparar -->
        </a>
      </div>

      <!-- Wishlist -->
      <div class="tp-header-action-item">
        <a href="/wishlist" class="tp-header-action-btn">
          <i class="fas fa-heart icon"></i> <!-- Icono de wishlist -->
          <span class="tp-header-action-badge">0</span>
        </a>
      </div>

      <!-- Carrito -->
      <div class="tp-header-action-item">
        <button type="button" class="tp-header-action-btn cartmini-open-btn">
          <i class="fas fa-shopping-cart icon"></i> <!-- Icono de carrito -->
          <span class="tp-header-action-badge">0</span>
        </button>
      </div>

      <!-- Menú para móviles -->
      <div class="tp-header-action-item d-lg-none">
        <button type="button" class="tp-header-action-btn tp-offcanvas-open-btn">
          <i class="fas fa-bars icon"></i> <!-- Icono de menú móvil -->
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderActions",
};
</script>

<style scoped>
/* Estilos para el contenedor principal */
.tp-header-main-right {
  display: flex;
  align-items: center;
  gap: 20px; /* Espacio entre elementos */
}

/* Estilos para los iconos */
.icon {
  width: 20px;
  height: 20px;
  color: #333; /* Color del icono */
}

/* Estilos para el perfil de usuario */
.user-profile {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre el ícono y el texto */
}

.user-profile .greeting {
  font-size: 14px;
}

.user-profile .account-title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

/* Estilos para las acciones */
.tp-header-action {
  display: flex;
  align-items: center;
  gap: 15px; /* Espacio entre los íconos de acciones */
}

.tp-header-action-item {
  position: relative;
}

.tp-header-action-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff0000;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
}

/* Estilos para el botón de menú móvil */
.tp-offcanvas-open-btn {
  background: none;
  border: none;
  cursor: pointer;
}
</style>