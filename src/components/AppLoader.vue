<template>
  <div v-if="isLoading" class="loader-overlay">
    <div class="sk-folding-cube" :style="{ width: size, height: size }">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLoader",
  props: {
    isLoading: {
      type: Boolean,
      required: false, // La prop es opcional
      default: false, // Valor por defecto
    },
    size: {
      type: String,
      default: "40px", // Tamaño predeterminado
    },
  },
};
</script>

<style scoped>
.loader-overlay {
  position: fixed; /* Posicionamiento fijo */
  top: 0;
  left: 0;
  width: 100%; /* Ocupa todo el ancho */
  height: 100%; /* Ocupa todo el alto */
  background-color: rgba(0, 0, 0, 0.3); /* Fondo semi-transparente */
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
}

.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
}

.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #007bff;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  transform-origin: 100% 100%;
}

.sk-folding-cube .sk-cube2 {
  transform: scale(1.1) rotateZ(90deg);
}

.sk-folding-cube .sk-cube3 {
  transform: scale(1.1) rotateZ(180deg);
}

.sk-folding-cube .sk-cube4 {
  transform: scale(1.1) rotateZ(270deg);
}

.sk-folding-cube .sk-cube2:before {
  animation-delay: 0.3s;
}

.sk-folding-cube .sk-cube3:before {
  animation-delay: 0.6s;
}

.sk-folding-cube .sk-cube4:before {
  animation-delay: 0.9s;
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>