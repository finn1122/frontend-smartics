<template>
  <!-- Fondo oscuro -->
  <div
      v-if="isOpen"
      class="mobile-menu-overlay"
      @click="$emit('close')"
  ></div>

  <!-- Menú lateral -->
  <div :class="['mobile-menu', { 'open': isOpen }]">
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <ul class="mobile-menu-list">
      <li v-if="isAuthenticated">
        <a href="/profile">
          <i class="fas fa-user"></i> Mi Cuenta
        </a>
      </li>
      <li v-else>
        <a href="/login">
          <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
        </a>
      </li>

      <li>
        <a href="/compare">
          <i class="fas fa-exchange-alt"></i> Comparar
        </a>
      </li>

      <li>
        <a href="/wishlist">
          <i class="fas fa-heart"></i> Wishlist
          <span class="badge">0</span>
        </a>
      </li>

      <li>
        <a href="#" class="cartmini-open-btn">
          <i class="fas fa-shopping-cart"></i> Carrito
          <span class="badge">0</span>
        </a>
      </li>

      <li v-if="isAuthenticated">
        <a href="#" @click.prevent="$emit('logout')">
          <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileMenu",
  props: {
    isOpen: Boolean,
    isAuthenticated: Boolean
  },
  emits: ['close', 'logout']
});
</script>

<style scoped>
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 260px;
  height: 100vh;
  background: #fff;
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  z-index: 9999;
  padding: 20px;
}

.mobile-menu.open {
  right: 0;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin-top: 50px;
}

.mobile-menu-list li {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.mobile-menu-list a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  text-decoration: none;
}

.mobile-menu-list a:hover {
  color: #3bb77e;
}

.badge {
  margin-left: auto;
  background: #3bb77e;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}
</style>