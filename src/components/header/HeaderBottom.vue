<template>
  <div class="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
    <div class="container">
      <div class="tp-mega-menu-wrapper p-relative">
        <div class="row align-items-center">
          <!-- Categorías -->
          <div class="col-xl-3 col-lg-3">
            <div class="tp-header-category tp-category-menu tp-header-category-toggle">
              <button class="tp-category-menu-btn tp-category-menu-toggle">
                <span>
                  <svg width="18" height="25" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H1Z" fill="currentColor"></path>
                  </svg>
                </span>
                All Categories
              </button>
            </div>
          </div>

          <!-- Menú de Navegación -->
          <div class="col-xl-6 col-lg-6">
            <nav class="main-menu menu-style-1">
              <ul class="menu-list">
                <li class="has-dropdown has-mega-menu">
                  <a href="/">Home</a>
                  <!-- Mega Menu Content Here -->
                </li>
                <li class="has-dropdown has-mega-menu">
                  <a href="/shop">Shop</a>
                  <!-- Mega Menu Content Here -->
                </li>
                <li class="has-dropdown has-mega-menu">
                  <a href="/shop">Products</a>
                  <!-- Mega Menu Content Here -->
                </li>
                <li><a href="/coupons">Coupons</a></li>
                <li class="has-dropdown">
                  <a href="/blog">Blog</a>
                  <!-- Submenu Content Here -->
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>

          <!-- Contacto -->
          <div class="col-xl-3 col-lg-3">
            <div class="tp-header-contact d-flex align-items-center justify-content-end">
              <div class="tp-header-contact-icon">
                <span>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </div>
              <div class="tp-header-contact-content">
                <h5>Hotline:</h5>
                <p><a href="tel:+52-951-357-22-52">+(951) 357 22 52</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBottom",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
/* Estilos para el botón de categorías */
.tp-header-category {
  position: relative;
}

.tp-category-menu-btn {
  background-color: var(--tp-theme-primary);
  color: var(--tp-common-white);
  font-size: 14px;
  font-weight: 500;
  padding: 12px 30px;
  position: relative;
  text-align: left;
  width: 100%;
}
a, button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
}

.menu-list {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu-list li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

.menu-list li a:hover {
  color: #007bff;
}

/* Estilos para el contacto */
.tp-header-contact {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tp-header-contact-icon svg {
  width: 21px;
  height: 20px;
}

.tp-header-contact-content h5 {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.tp-header-contact-content p {
  margin: 0;
  font-size: 14px;
  color: #007bff;
}

.tp-header-contact-content a {
  text-decoration: none;
  color: inherit;
}
</style>