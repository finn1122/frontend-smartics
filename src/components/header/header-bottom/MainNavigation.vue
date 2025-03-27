<template>
  <nav class="main-menu menu-style-1">
    <ul class="menu-list">
      <li class="has-dropdown has-mega-menu"><a href="/">Home</a></li>
      <li class="has-dropdown has-mega-menu"><a href="/shop">Shop</a></li>
      <li class="has-dropdown has-mega-menu"><a href="/products">Products</a></li>
      <li><a href="/coupons">Coupons</a></li>
      <li class="has-dropdown"><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderBottomMainNavigation"
};
</script>

<style scoped>
/* ============================= */
/* 🌟 ESTILOS GENERALES */
/* ============================= */
.tp-header-bottom-border {
  border-top: 1px solid rgba(1, 15, 28, 0.1);
}

/* ============================= */
/* 📏 RESPONSIVE CONTAINER */
/* ============================= */
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

/* ============================= */
/* 📌 BOTÓN DE CATEGORÍAS */
/* ============================= */
.tp-header-category {
  position: relative;
}

.tp-category-menu-btn {
  background-color: var(--tp-theme-primary);
  color: var(--tp-common-white);
  padding: 12px 25px;
  font-size: 15px;
  position: relative;
  border: none;
  font-weight: 500;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}


.tp-category-menu-btn span {
  flex-grow: 1; /* Esto empuja el icono hacia la derecha */
  text-align: left;
}

.tp-category-menu-btn i {
  font-size: 16px;
}

/* ============================= */
/* 🏠 MENÚ DE NAVEGACIÓN */
/* ============================= */
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

/* ============================= */
/* 📞 CONTACTO */
/* ============================= */
.tp-header-contact {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tp-header-contact-icon i {
  font-size: 20px;
  color: var(--tp-theme-primary);
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

/* ============================= */
/* 🔧 RESET & UTILIDADES */
/* ============================= */
a,
button {
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
}

*, :after, :before {
  box-sizing: border-box;
}

/* Estilos para el dropdown (según lo solicitado) */
.tp-category-menu nav ul {
  background: #fff;
  box-shadow: 0 1px 3px #010f1c1a;
  left: 0;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 9;
  margin: 0;
  padding: 0;
}

.tp-category-menu nav ul li {
  list-style: none;
  padding: 0 30px;
  position: relative;
}

.tp-category-menu nav ul li a {
  background-color: var(--tp-common-white);
  border-bottom: 1px solid var(--tp-border-primary);
  color: var(--tp-text-2);
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  padding: 13px 0 12px;
  position: relative;
  width: 100%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.tp-category-menu nav ul li a:hover {
  color: var(--tp-theme-primary);
}
</style>
