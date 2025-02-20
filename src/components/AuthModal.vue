<template>
  <div class="auth-modal-overlay" @click.self="closeModal">
    <div class="auth-modal">
      <!-- Notificación -->
      <AppNotification v-if="notification.message" :message="notification.message" :type="notification.type" />

      <!-- Loader -->
      <div v-if="loading" class="loader-overlay">
        <AppLoader />
      </div>

      <div class="auth-tabs">
        <button
            :class="{ active: activeTab === 'signin' }"
            @click="activeTab = 'signin'"
        >
          Sign In
        </button>
        <button
            :class="{ active: activeTab === 'signup' }"
            @click="activeTab = 'signup'"
        >
          Sign Up
        </button>
      </div>

      <!-- Formulario de Sign In -->
      <div v-if="activeTab === 'signin'" class="signin-form">
        <h2>Sign In</h2>
        <form @submit.prevent="handleSignIn">
          <input v-model="signInEmail" type="email" placeholder="Email" required />
          <input v-model="signInPassword" type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>

      <!-- Formulario de Sign Up -->
      <div v-else class="signup-form">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSignUp">
          <input v-model="signUpName" type="text" placeholder="Name" required />
          <input v-model="signUpEmail" type="email" placeholder="Email" required />
          <input v-model="signUpPassword" type="password" placeholder="Password" required />
          <input
              v-model="signUpPasswordConfirmation"
              type="password"
              placeholder="Confirm Password"
              required
          />
          <button type="submit" :disabled="loading">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/api'; // Importa el servicio de autenticación
import AppNotification from '@/components/AppNotification.vue'; // Importa el componente de notificación
import AppLoader from '@/components/AppLoader.vue';
import api from "@/services/api"; // Importa el componente de loader

export default {
  components: { AppNotification, AppLoader },
  data() {
    return {
      activeTab: 'signin', // 'signin' o 'signup'
      signInEmail: '',
      signInPassword: '',
      signUpName: '',
      signUpEmail: '',
      signUpPassword: '',
      signUpPasswordConfirmation: '',
      notification: {
        message: '',
        type: 'success', // 'success' o 'error'
      },
      loading: false, // Controla la visibilidad del loader
    };
  },
  methods: {
    async handleSignIn() {
      this.loading = true; // Muestra el loader
      try {
        const userData = {
          email: this.signInEmail, // Usa el email del formulario de inicio de sesión
          password: this.signInPassword, // Usa la contraseña del formulario de inicio de sesión
        };

        // Hace la solicitud de inicio de sesión
        const response = await api.login(userData);

        // Si el inicio de sesión es exitoso
        this.showNotification('¡Bienvenido!', 'success');

        // Guarda el token de autenticación (si es necesario)
        localStorage.setItem('authToken', response.data.token); // Ajusta según la respuesta de tu API

        // Redirige al usuario a la página de inicio
        this.$router.push('/');

        // Cierra el modal
        this.$emit('close');
      } catch (error) {
        // Si hay un error
        if (error.response?.data?.error === "Email not verified") {
          // Maneja el caso específico de correo no verificado
          this.showNotification('Por favor, verifica tu correo electrónico.', 'error');
          this.$router.push('/verify-email'); // Redirige a la página de verificación de correo
        } else {
          // Maneja otros errores
          const errorMessage = error.response?.data?.message || 'Error en el inicio de sesión';
          this.showNotification(errorMessage, 'error');
        }
      } finally {
        this.loading = false; // Oculta el loader
      }
    },
    async handleSignUp() {
      this.loading = true; // Muestra el loader
      try {
        const userData = {
          name: this.signUpName,
          email: this.signUpEmail,
          password: this.signUpPassword,
          password_confirmation: this.signUpPasswordConfirmation,
        };

        // Hace la solicitud de registro
        await apiService.register(userData);

        // Si el registro es exitoso
        this.showNotification('Registro exitoso. ¡Bienvenido!', 'success');
        this.$emit('close'); // Cierra el modal
        this.$router.push('/'); // Redirige al usuario a la página de inicio
      } catch (error) {
        // Si hay un error
        const errorMessage = error.response?.data?.message || 'Error en el registro';
        this.showNotification(errorMessage, 'error');
      } finally {
        this.loading = false; // Oculta el loader
      }
    },
    showNotification(message, type) {
      this.notification.message = message;
      this.notification.type = type;
      setTimeout(() => {
        this.notification.message = ''; // Limpia el mensaje después de 3 segundos
      }, 3000);
    },
    closeModal() {
      this.$emit('close'); // Cierra el modal al hacer clic fuera
    },
  },
};
</script>

<style scoped>
.auth-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
}

.auth-modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  position: relative;
}

.loader-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.auth-tabs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
}

.auth-tabs button {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
}

.auth-tabs button.active {
  border-bottom: 2px solid #007bff;
  font-weight: bold;
}

.signin-form,
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
