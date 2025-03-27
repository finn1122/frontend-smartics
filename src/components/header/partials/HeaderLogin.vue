<template>
  <div class="tp-header-login d-none d-lg-block">
    <!-- Cuando el usuario ha iniciado sesión -->
    <a v-if="isAuthenticated" href="/profile" class="d-flex align-items-center user-profile">
      <div class="tp-header-login-icon">
        <div class="icon-circle">
          <i class="fas fa-user icon"></i>
        </div>
      </div>
      <div class="tp-header-login-content d-none d-xl-block">
        <span>{{ greetingText }}</span>
        <h5 class="tp-header-login-title">{{ accountText }}</h5>
      </div>
    </a>

    <!-- Cuando el usuario no ha iniciado sesión -->
    <router-link v-else :to="loginRoute" class="d-flex align-items-center login-link">
      <div class="tp-header-login-icon">
        <div class="icon-circle">
          <i class="fas fa-user icon"></i>
        </div>
      </div>
      <div class="tp-header-login-content d-none d-xl-block">
        <span>{{ loginText }}</span>
        <h5 class="tp-header-login-title">{{ accountText }}</h5>
      </div>
    </router-link>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useAuthStore } from "@/stores/authStore";

export default defineComponent({
  name: "HeaderLogin",
  props: {
    greetingText: {
      type: String,
      default: "Bienvenido"
    },
    loginText: {
      type: String,
      default: "Hola, Inicia Sesión"
    },
    accountText: {
      type: String,
      default: "Tu Cuenta"
    },
    loginRoute: {
      type: String,
      default: "/login"
    },
    profileRoute: {
      type: String,
      default: "/profile"
    }
  },
  setup() {
    const authStore = useAuthStore();

    const isAuthenticated = computed(() => authStore.isAuthenticated);
    const userName = computed(() => authStore.user?.name || '');

    return {
      isAuthenticated,
      userName
    };
  }
});
</script>

<style scoped>
.tp-header-login {
  display: flex;
  align-items: center;
}

.tp-header-login-icon {
  margin-right: 10px;
}

.icon-circle {
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tp-header-login-content span {
  color: #767a7d;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
}

.tp-header-login-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0;
  color: black;
}

.user-profile,
.login-link {
  text-decoration: none;
  color: inherit;
}

.d-flex {
  display: flex !important;
}

.align-items-center {
  align-items: center !important;
}

.d-none {
  display: none !important;
}

.d-lg-block {
  display: none;
}

@media (min-width: 992px) {
  .d-lg-block {
    display: block !important;
  }
}

.d-xl-block {
  display: none;
}

@media (min-width: 1200px) {
  .d-xl-block {
    display: block !important;
  }
}
</style>