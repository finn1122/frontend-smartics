<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div class="tp-login-input-wrapper">
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
        <div class="tp-login-input-box">
          <div class="p-relative">
            <div class="tp-login-input">
              <input
                  id="tp_password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  name="password"
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
              <label for="tp_password">Password</label>
            </div>
          </div>
          <div style="color: red;"></div>
        </div>
      </div>
      <div class="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
        <div class="tp-login-remeber">
          <input id="remeber" type="checkbox" v-model="form.rememberMe"/>
          <label for="remeber">Remember me</label>
        </div>
        <div class="tp-login-forgot">
          <a href="/forgot" class="">Forgot Password?</a>
        </div>
      </div>
      <div class="tp-login-bottom">
        <button type="submit" class="tp-login-btn w-100">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
        rememberMe: false,
      },
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      // Emitir el objeto form al componente padre
      this.$emit('login', this.form);
    }
  }
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
}

.tp-login-suggetions {
  margin-bottom: 20px;
}

.tp-login-remeber {
  display: flex;
  align-items: center;
  gap: 5px;
}

.tp-login-forgot a {
  color: #007bff;
  text-decoration: none;
}

.tp-login-forgot a:hover {
  text-decoration: underline;
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
</style>