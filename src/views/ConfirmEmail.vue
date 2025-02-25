<template>
  <div class="confirm-email-page">
    <!-- Sección de Breadcrumb -->
    <section class="breadcrumb__area include-bg text-center pt-95 pb-50">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="breadcrumb__content p-relative z-index-1">
              <h3 class="breadcrumb__title">Confirm Your Email</h3>
              <div class="breadcrumb__list">
                <span><router-link to="/" class="">Home</router-link></span>
                <span>Confirm Email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Confirmación de Correo -->
    <section class="tp-login-area pb-140 p-relative z-index-1 fix">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="tp-login-wrapper text-center">
              <h3 class="tp-login-title">Confirm Your Email</h3>
              <p>
                We have sent a confirmation email to <strong>{{ email }}</strong>.
                Please check your inbox and click the link to verify your account.
              </p>
              <p>
                If you didn't receive the email, click the button below to resend it.
              </p>
              <button @click="resendConfirmationEmail" class="tp-login-btn">
                Resend Confirmation Email
              </button>
              <p class="mt-3">
                <router-link to="/login">Back to Login</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from '@/services/api';
import { useNotificationStore } from '@/stores/notificationStore';

export default {
  name: 'ConfirmEmail',
  data() {
    return {
      email: this.$route.query.email || '', // Obtén el email de la URL
    };
  },
  setup() {
    const notificationStore = useNotificationStore();
    return { notificationStore };
  },
  methods: {
    async resendConfirmationEmail() {
      try {
        const response = await api.resendConfirmationEmail({ email: this.email });
        if (response.success) {
          this.notificationStore.showNotification('Confirmation email resent successfully!', 'success');
        } else {
          this.notificationStore.showNotification(response.message || 'Failed to resend confirmation email.', 'error');
        }
      } catch (error) {
        this.notificationStore.showNotification(error.message || 'An unexpected error occurred.', 'error');
      }
    },
  },
};
</script>

<style scoped>
.confirm-email-page {
  background-color: #ffffff;
}

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
  margin-bottom: 20px;
  color: var(--tp-heading-primary);
}

.tp-login-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
}

.tp-login-btn:hover {
  background-color: #0056b3;
}
</style>