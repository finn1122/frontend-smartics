<template>
  <main>
    <!-- Sección de Breadcrumb -->
    <section class="breadcrumb__area include-bg text-center pt-95 pb-50">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="breadcrumb__content p-relative z-index-1">
              <h3 class="breadcrumb__title">My account</h3>
              <div class="breadcrumb__list">
                <span><a href="/" class="">Home</a></span>
                <span>My account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Login -->
    <section class="tp-login-area pb-140 p-relative z-index-1 fix">
      <div class="tp-login-shape">
        <img class="tp-login-shape-1" src="/img/login/login-shape-1.png" alt="shape">
        <img class="tp-login-shape-2" src="/img/login/login-shape-2.png" alt="shape">
        <img class="tp-login-shape-3" src="/img/login/login-shape-3.png" alt="shape">
        <img class="tp-login-shape-4" src="/img/login/login-shape-4.png" alt="shape">
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="tp-login-wrapper">
              <div class="tp-login-top text-center mb-30">
                <h3 class="tp-login-title">Login to Shofy.</h3>
                <p>Don’t have an account? <span><a href="/register" class="">Create a free account</a></span></p>
              </div>

              <!-- Opciones de Login Social -->
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
                  <p>or Sign in with <a href="#">Email</a></p>
                </div>
              </div>

              <!-- Formulario de Login -->
              <form @submit.prevent="handleLogin">
                <div class="tp-login-input-wrapper">
                  <div class="tp-login-input-box">
                    <div class="tp-login-input">
                      <input id="email" type="email" v-model="email" placeholder="shofy@mail.com">
                    </div>
                    <div class="tp-login-input-title">
                      <label for="email">Your Email</label>
                    </div>
                    <div style="color: red;"></div>
                  </div>
                  <div class="tp-login-input-box">
                    <div class="p-relative">
                      <div class="tp-login-input">
                        <input id="tp_password" type="password" v-model="password" placeholder="Min. 6 character">
                      </div>
                      <div class="tp-login-input-eye" id="password-show-toggle">
                        <span class="open-eye">
                          <i class="fas fa-eye"></i> <!-- Icono de Font Awesome -->
                        </span>
                      </div>
                      <div class="tp-login-input-title">
                        <label for="tp_password">Password</label>
                      </div>
                    </div>
                    <div style="color: red;"></div>
                  </div>
                </div>

                <!-- Recordar y Olvidar Contraseña -->
                <div class="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                  <div class="tp-login-remeber">
                    <input id="remeber" type="checkbox" v-model="rememberMe">
                    <label for="remeber">Remember me</label>
                  </div>
                  <div class="tp-login-forgot">
                    <a href="/forgot" class="">Forgot Password?</a>
                  </div>
                </div>

                <!-- Botón de Login -->
                <div class="tp-login-bottom">
                  <button type="submit" class="tp-login-btn w-100">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "LoginApp",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    handleLogin() {
      // Lógica para manejar el login
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Remember Me:", this.rememberMe);
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados */
.tp-login-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.tp-login-btn:hover {
  background-color: #0056b3;
}

.tp-login-input-eye {
  cursor: pointer;
}
</style>