<template>
  <div class="profile__tab-content">
    <div class="profile__main">
      <div class="profile__main-top pb-80">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="profile__main-inner">
              <div class="profile__main-thumb">
                <img src="https://shofy-nuxt.vercel.app/img/users/user-10.jpg" alt="User Image" class="profile__main-thumb-img">
                <div class="profile__main-thumb-edit">
                  <input id="profile-thumb-input" class="profile-img-popup" type="file">
                  <label for="profile-thumb-input"><i class="fas fa-camera"></i></label>
                </div>
              </div>
              <div class="profile__main-content">
                <h4 class="profile__main-title">Welcome Mr. Admin!</h4>
                <p>You have <span>08</span> notifications</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile__main-logout text-sm-end">
              <a href="/login" class="tp-logout-btn">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="profile__main-info">
        <div class="row gx-3">
          <div class="col-md-3 col-sm-6">
            <div class="profile__main-info-item">
              <div class="profile__main-info-icon">
                <span class="profile-icon-count profile-download">2</span>
                <i class="fas fa-download"></i>
              </div>
              <h4 class="profile__main-info-title">Downloads</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="profile__main-info-item">
              <div class="profile__main-info-icon">
                <span class="profile-icon-count profile-order">5</span>
                <i class="fas fa-shopping-cart"></i>
              </div>
              <h4 class="profile__main-info-title">Orders</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="profile__main-info-item">
              <div class="profile__main-info-icon">
                <span class="profile-icon-count profile-wishlist">10</span>
                <i class="fas fa-heart"></i>
              </div>
              <h4 class="profile__main-info-title">Wishlist</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="profile__main-info-item">
              <div class="profile__main-info-icon">
                <span class="profile-icon-count profile-gift">07</span>
                <i class="fas fa-gift"></i>
              </div>
              <h4 class="profile__main-info-title">Gift Box</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileContent',
};
</script>

<style scoped>
/* Estilos generales */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, :after, :before {
  box-sizing: border-box;
}

/* Contenedor principal */
.profile__tab-content {
  background-color: #fff;
  box-shadow: 0 30px 50px #052f281f;
  padding: 25px 30px 30px;
}

/* Estilos para el título */
.profile__main-title {
  font-size: 24px;
  margin-bottom: 0;
  color: var(--tp-heading-primary);
  font-family: var(--tp-ff-heading);
  font-weight: 700;
  line-height: 1.2;
  transition: color 0.3s ease-out;
}

/* Botón de logout */
.tp-logout-btn {
  border: 1px solid rgba(1, 15, 28, 0.12);
  color: var(--tp-common-black);
  display: inline-block;
  font-family: var(--tp-ff-space);
  font-size: 14px;
  font-weight: 500;
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
}

.tp-logout-btn i {
  margin-right: 8px;
}

/* Estilos para los ítems de información */
.profile__main-info-item {
  border: 1px solid #eaeaef;
  padding: 27px 30px 25px;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 1.5rem;
}

.profile__main-info-icon {
  margin-bottom: 10px;
  position: relative;
}

.profile__main-info-icon span {
  display: inline-block;
  background-color: var(--tp-theme-primary);
  color: var(--tp-common-white);
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  font-size: 16px;
  position: absolute;
  top: -10px;
  right: -10px;
}

.profile__main-info-icon i {
  font-size: 32px; /* Íconos más grandes */
  color: var(--tp-theme-primary);
}

.profile__main-info-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--tp-text-body);
  margin-top: 10px;
}

/* Estilos para la imagen de perfil */
.profile__main-thumb {
  position: relative;
  margin-bottom: 20px;
  display: inline-block; /* Para que el contenedor se ajuste al tamaño de la imagen */
}

.profile__main-thumb-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 16px;
}

.profile__main-thumb-edit {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #007BFF;
  border-radius: 50%;
  border: 2px solid #ffffff;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transform: translate(-20%, -15%); /* Ajusta la posición del ícono */
}

.profile__main-thumb-edit input {
  display: none;
}

.profile__main-thumb-edit label {
  color: var(--tp-common-white);
  cursor: pointer;
}

.profile__main-thumb-edit label i {
  font-size: 16px; /* Ajusta el tamaño del ícono */
}

/* Estilos para el contenido debajo de la imagen */
.profile__main-content {
  text-align: left;
}

.profile__main-content p {
  font-size: 14px;
  margin-bottom: 0px;
  color: var(--tp-text-body);
}

.profile__main-content p span {
  color: var(--tp-theme-primary);
  font-weight: 600;
}

/* Media queries para responsividad */
@media (max-width: 575px), only screen and (min-width: 576px) and (max-width: 767px) {
  .profile__main-info-item {
    margin-bottom: 25px;
  }
}

.profile__main-info-icon .profile-icon-count {
  background-color: var(--tp-theme-primary);
  border: 2px solid var(--tp-common-white);
  border-radius: 50%;
  color: var(--tp-common-white);
  font-size: 13px;
  font-weight: 500;
  height: 25px;
  line-height: 20px;
  position: absolute;
  right: -8px;
  top: 2px;
  width: 25px;
}
</style>