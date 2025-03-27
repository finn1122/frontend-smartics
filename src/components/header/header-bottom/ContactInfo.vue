<template>
  <div class="tp-header-contact d-flex align-items-center justify-content-end">
    <div class="tp-header-contact-icon">
      <span>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75 3.5H16.25C17.0784 3.5 17.75 4.17157 17.75 5V15C17.75 15.8284 17.0784 16.5 16.25 16.5H4.75C3.92157 16.5 3.25 15.8284 3.25 15V5C3.25 4.17157 3.92157 3.5 4.75 3.5Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M17.75 5.5L10.5 10.75L3.25 5.5" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </span>
    </div>
    <div class="tp-header-contact-content">
      <h5>Hotline:</h5>
      <p><a href="tel:+52-951-357-22-52">+(951) 357 22 52</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBottomContactInfo"
};
</script>

<style scoped>
.tp-header-contact {
  gap: 10px;
}

.tp-header-contact-icon svg {
  width: 21px;
  height: 20px;
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
}

.tp-header-contact-content a {
  color: var(--tp-theme-primary);
  text-decoration: none;
}
</style>