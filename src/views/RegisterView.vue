<template>
  <div>
    <AppLoader :isLoading="isLoading" />
    <!-- Sección de Breadcrumb -->
    <section class="breadcrumb__area include-bg text-center pt-95 pb-50">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="breadcrumb__content p-relative z-index-1">
              <h3 class="breadcrumb__title">Register Now</h3>
              <div class="breadcrumb__list">
                <span><a href="/" class="">Home</a></span>
                <span>Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Registro -->
    <section class="tp-login-area pb-140 p-relative z-index-1 fix">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="tp-login-wrapper">
              <div class="tp-login-top text-center mb-30">
                <h3 class="tp-login-title">Sign Up Shofy.</h3>
                <p>Already have an account? <span><router-link to="/login" class="">Sign In</router-link></span></p>              </div>
              <div class="tp-login-option">
                <div class="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
                  <div class="tp-login-option-item has-google">
                    <a href="#">
                      <img src="/img/icon/login/google.svg" alt=""> Sign in with google
                    </a>
                  </div>
                  <div class="tp-login-option-item">
                    <a href="#">
                      <img src="/img/icon/login/facebook.svg" alt="">
                    </a>
                  </div>
                  <div class="tp-login-option-item">
                    <a href="#">
                      <img class="apple" src="/img/icon/login/apple.svg" alt="">
                    </a>
                  </div>
                </div>
                <div class="tp-login-mail text-center mb-40">
                  <p>or Sign up with <a href="#">Email</a></p>
                </div>
                <RegisterForm @register="handleRegister" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import RegisterForm from '@/components/auth/RegisterForm.vue';
import api from '@/services/api';
import { useNotificationStore } from '@/stores/notificationStore';
import AppLoader from "@/components/AppLoader.vue";
import {useAuthStore} from "@/stores/authStore";

export default {
  name: 'RegisterApp',
  components: {
    AppLoader,
    RegisterForm
  },
  setup() {
    const notificationStore = useNotificationStore();
    const authStore = useAuthStore();
    return { notificationStore, authStore };
  },
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    this.authStore.checkAuth();
    if(this.authStore.isAuthenticated) {
      this.$router.push('/');
    }
  },
  methods: {
    async handleRegister(formData) {
      this.isLoading = true;
      try {
        const response = await api.register(formData);
        console.log("Respuesta del servidor:", response); // Depuración

        if (response.status === 201) {
          // Registro exitoso
          this.notificationStore.showNotification(
              response.data.message || "Registro exitoso. Por favor verifica tu correo.",
              "success" // <-- Asegúrate de usar "success" aquí
          );
          this.$router.push({ path: '/confirm-email', query: { email: formData.email } });
        } else {
          // Error en el registro
          this.notificationStore.showNotification(
              response.data.message || "Error en el registro",
              "error" // <-- Usa "error" para mensajes de error
          );
        }
      } catch (error) {
        console.error("Error en handleRegister:", error); // Depuración
        this.notificationStore.showNotification(
            error.message || "Error inesperado",
            "error" // <-- Usa "error" para errores inesperados
        );
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
<style scoped>
.tp-login-area {
  background-color: #ffffff; /* Color de fondo de la otra sección */
}

/* Estilos para el Breadcrumb */
.breadcrumb__area {
  background-color: #ffffff; /* Color de fondo */
  padding: 95px 0 50px; /* Espaciado interno */
}

.breadcrumb__title {
  font-size: 44px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 6px;
  color: var(--tp-heading-primary);
  font-family: 'Arial', sans-serif; /* Valor directo en lugar de var(--tp-ff-heading) */
}

.breadcrumb__list {
  font-size: 16px;
  color: var(--tp-heading-primary);
}

.breadcrumb__list span {
  font-size: 16px;
  font-weight: 400;
  position: relative;
  color: var(--tp-heading-primary);
}

.breadcrumb__list a {
  color: var(--tp-heading-primary);
  text-decoration: none;
}

.breadcrumb__list a:hover {
  text-decoration: underline;
}

/* Agregar el puntito entre los elementos */
.breadcrumb__list span:not(:last-child)::after {
  content: '•'; /* Puntito */
  margin: 0 4px; /* Espaciado */
  color: #666; /* Color del puntito */
}

/* Estilos para el Login */
.tp-login-wrapper {
  background-color: var(--tp-common-white);
  box-shadow: 0 30px 70px #010f1c1a;
  padding: 50px 60px 70px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.tp-login-title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--tp-heading-primary);
  font-family: var(--tp-ff-heading), sans-serif;
}

.tp-login-top a {
  text-decoration: none; /* Elimina el subrayado */
}

.tp-login-mail {
  position: relative;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  color: var(--tp-heading-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.tp-login-mail a {
  color: inherit; /* Hereda el color del texto padre */
  text-decoration: none; /* Elimina el subrayado */
}

.tp-login-mail::before,
.tp-login-mail::after {
  content: '';
  flex: 1; /* Hace que las líneas se expandan */
  height: 1px;
  background-color: #e0e2e3;
  margin: 0 10px; /* Espacio entre la línea y el texto */
}

.tp-login-mail p {
  background-color: var(--tp-common-white);
  color: var(--tp-heading-primary);
  font-size: 15px;
  margin: 0;
  padding: 0 10px;
  display: inline-block;
  position: relative;
  z-index: 2; /* Asegura que el texto esté por encima de las líneas */
}

.tp-login-top p {
  color: #49535b;
  font-size: 16px;
  font-weight: 400;
}

.tp-login-option {
  margin-bottom: 30px;
}

.tp-login-social {
  gap: 10px;
}

.tp-login-option-item {
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.tp-login-option-item:hover {
  background-color: #e0e0e0;
}

.tp-login-input input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.tp-login-input-title label {
  background-color: var(--tp-common-white);
  color: var(--tp-common-black);
  font-size: 14px;
  left: 20px;
  line-height: 1;
  padding: 0 5px;
  position: absolute;
  top: -7px;
}
.tp-login-option {
  margin-bottom: 30px;
}

.tp-login-social {
  gap: 10px;
}

.tp-login-option-item {
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.tp-login-option-item:hover {
  background-color: #e0e0e0;
}
</style>