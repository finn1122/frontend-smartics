<template>
  <div class="profile__tab-content">
    <div class="profile__main">
      <div class="profile__main-top pb-80">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="profile__main-inner d-flex flex-wrap align-items-center">
              <div class="profile__main-thumb">
                <img src="/img/users/user-10.jpg" alt="User Image">
                <div class="profile__main-thumb-edit">
                  <input id="profile-thumb-input" class="profile-img-popup" type="file">
                  <label for="profile-thumb-input"><i class="fa-light fa-camera"></i></label>
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
                <span><span class="profile-icon-count profile-download">2</span><i class="fas fa-download"></i></span>
              </div>
              <h4 class="profile__main-info-title">Downloads</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="profile__main-info-item">
              <div class="profile__main-info-icon">
                <span><span class="profile-icon-count profile-order">5</span><i class="fas fa-shopping-cart"></i></span>
              </div>
              <h4 class="profile__main-info-title">Orders</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="profile__main-info-item">
              <div class="profile__main-info-icon">
                <span><span class="profile-icon-count profile-wishlist">10</span><i class="fas fa-heart"></i></span>
              </div>
              <h4 class="profile__main-info-title">Wishlist</h4>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="profile__main-info-item">
              <div class="profile__main-info-icon">
                <span><span class="profile-icon-count profile-gift">07</span><i class="fas fa-gift"></i></span>
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
.profile__tab-content {
  background-color: var(--tp-common-white);
  box-shadow: 0 30px 50px rgba(5, 47, 40, 0.12);
  padding: 25px 30px 30px;
  border-radius: 8px;
}

.profile__main {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.profile__main-top {
  padding-bottom: 80px;
}

.profile__main-inner {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile__main-thumb {
  position: relative;
}

.profile__main-thumb img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.profile__main-thumb-edit {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--tp-theme-primary);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
}

.profile__main-thumb-edit input {
  display: none;
}

.profile__main-thumb-edit label {
  color: var(--tp-common-white);
  cursor: pointer;
}

.profile__main-content h4 {
  font-size: 20px;
  font-weight: 600;
  color: var(--tp-text-body);
}

.profile__main-content p {
  font-size: 14px;
  color: var(--tp-text-body);
}

.profile__main-content p span {
  color: var(--tp-theme-primary);
  font-weight: 600;
}

.profile__main-logout .tp-logout-btn {
  background-color: var(--tp-theme-primary);
  color: var(--tp-common-white);
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.profile__main-logout .tp-logout-btn i {
  font-size: 16px;
}

.profile__main-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.profile__main-info-item {
  background-color: var(--tp-grey-1);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.profile__main-info-icon {
  margin-bottom: 10px;
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
}

.profile__main-info-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--tp-text-body);
  margin-top: 10px;
}
</style>