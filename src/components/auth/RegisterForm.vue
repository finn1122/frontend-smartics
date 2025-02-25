<template>
  <div>
    <form @submit.prevent="handleRegister">
      <div class="tp-login-input-wrapper">
        <!-- Campo para el nombre -->
        <div class="tp-login-input-box">
          <div class="tp-login-input">
            <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Shahnewaz Sakil"
                required
            />
          </div>
          <div class="tp-login-input-title">
            <label for="name">Your Name</label>
          </div>
          <div style="color: red;"></div>
        </div>

        <!-- Campo para el email -->
        <div class="tp-login-input-box">
          <div class="tp-login-input">
            <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="shofy@mail.com"
                required
            />
          </div>
          <div class="tp-login-input-title">
            <label for="email">Your Email</label>
          </div>
          <div style="color: red;"></div>
        </div>

        <!-- Campo para la contraseña -->
        <div class="tp-login-input-box">
          <div class="p-relative">
            <div class="tp-login-input">
              <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Min. 6 character"
                  required
              />
            </div>
            <div class="tp-login-input-eye" @click="togglePasswordVisibility">
              <span v-if="showPassword">
                <i class="fas fa-eye-slash"></i>
              </span>
              <span v-else>
                <i class="fas fa-eye"></i>
              </span>
            </div>
            <div class="tp-login-input-title">
              <label for="password">Password</label>
            </div>
          </div>
        </div>

        <!-- Campo para confirmar la contraseña -->
        <div class="tp-login-input-box">
          <div class="p-relative">
            <div class="tp-login-input">
              <input
                  id="password_confirmation"
                  v-model="form.password_confirmation"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Confirm Password"
                  required
              />
            </div>
            <div class="tp-login-input-eye" @click="togglePasswordVisibility">
              <span v-if="showPassword">
                <i class="fas fa-eye-slash"></i>
              </span>
              <span v-else>
                <i class="fas fa-eye"></i>
              </span>
            </div>
            <div class="tp-login-input-title">
              <label for="password_confirmation">Confirm Password</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Botón de registro -->
      <div class="tp-login-bottom">
        <button type="submit" class="tp-login-btn w-100">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleRegister() {
      // Emitir el objeto form al componente padre
      this.$emit('register', this.form);
    },
  },
};
</script>

<style scoped>

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

.tp-login-input-wrapper {
  margin-bottom: 20px;
}

.tp-login-input-box {
  position: relative;
  margin-bottom: 20px;
}

.tp-login-input {
  position: relative;
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

.tp-login-input-eye {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666; /* Color del ícono */
}

.tp-login-input-eye:hover {
  color: #000; /* Cambia el color al pasar el mouse */
}

.tp-login-bottom {
  margin-top: 20px;
}

.tp-login-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.tp-login-btn:hover {
  background-color: #0056b3;
}
</style>