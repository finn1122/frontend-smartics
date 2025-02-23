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
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8">
            <div class="tp-login-wrapper">
              <div class="tp-login-top text-center mb-30">
                <h3 class="tp-login-title">Login to smartics.</h3>
                <p>Don’t have an account? <span><a href="/register" class="">Create a free account</a></span></p>
              </div>
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
              <form>
                <div class="tp-login-input-wrapper">
                  <div class="tp-login-input-box">
                    <div class="tp-login-input">
                      <input id="email" type="email" placeholder="shofy@mail.com">
                    </div>
                    <div class="tp-login-input-title">
                      <label for="email">Your Email</label>
                    </div>
                    <div style="color: red;"></div>
                  </div>
                  <div class="tp-login-input-box">
                    <div class="p-relative">
                      <div class="tp-login-input">
                        <input id="tp_password" type="password" name="password" placeholder="Min. 6 character">
                      </div>
                      <div class="tp-login-input-eye" id="password-show-toggle">
                        <span class="open-eye">
                          <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <!-- SVG code -->
                          </svg>
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
                    <input id="remeber" type="checkbox">
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
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'LoginApp',
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
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 4px;
  color: var(--tp-heading-primary);
  font-family: var(--tp-ff-heading),sans-serif;
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
</style>