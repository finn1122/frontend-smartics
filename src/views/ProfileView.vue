<template>
  <section class="profile__area pt-120 pb-120">
    <div class="container">
      <div class="profile__inner p-relative">
        <div class="profile__shape">
          <Suspense>
            <template #default>
              <ProfileTabs :user="user" @logout="handleLogout"/>
            </template>
            <template #fallback>
              <AppLoader />
            </template>
          </Suspense>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileTabs from '@/components/profile/ProfileTabs.vue';
import {useAuthStore} from "@/stores/authStore";
import api from "@/services/api";
import { useLoaderStore } from '@/stores/loaderStore'

export default {
  name: 'ProfileView',
  components: {
    ProfileTabs,
  },
  data() {
    return {
      user: null,
      loader: useLoaderStore()
    };
  },
  methods: {
    async fetchUser() {
      this.loader.show() // Aquí usas loader directamente desde data
      const authStore = useAuthStore(); // Obtener el store
      const userId = authStore.user?.id; // Obtener el userId desde el store

      if (!userId) {
        this.$router.push('/login'); // 🔹 Redirigir si no hay usuario autenticado
        return;
      }

      this.error = false; // Reiniciar el estado de error

      try {
        const result = await api.getUser(userId); // Hacer la solicitud
        this.user = result;

        if (result.error) {
          this.error = true;
          this.errorMessage = result.message; // Mostrar el mensaje de error
        } else {
          this.user = result; // Guardar los datos del usuario
        }
      } catch (error) {
        this.error = true;
        this.errorMessage = "Error inesperado al obtener el usuario"; // Manejar errores inesperados
      } finally {
        this.loader.hide() // Aquí usas loader directamente desde data
      }
    },
    async handleLogout() {
      console.log('handleLogout')
      this.loader.show() // Aquí usas loader directamente desde data
      this.error = false; // Reiniciar el estado de error

      try {
        const result = await api.logout(); // Hacer la solicitud

        if (result.error) {
          this.error = true;
          this.errorMessage = result.message; // Mostrar el mensaje de error
        } else {
          this.$router.push('/'); // Redirigir al usuario a la página de login
        }
      } catch (error) {
        this.error = true;
        this.errorMessage = "Error inesperado al obtener el usuario"; // Manejar errores inesperados
      } finally {
        this.loader.hide() // Aquí usas loader directamente desde data
      }
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style scoped>
.pb-120 {
  padding-bottom: 120px;
}
.pt-120 {
  padding-top: 120px;
}
</style>