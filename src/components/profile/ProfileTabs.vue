<template>
  <div class="row">
    <!-- Columna de pestañas -->
    <div class="col-xxl-4 col-lg-4">
      <nav>
        <div class="nav nav-tabs tp-tab-menu flex-column" id="profile-tab" role="tablist">
          <ProfileTabItem
              v-for="tab in tabs"
              :key="tab.id"
              :id="tab.id"
              :target="tab.target"
              :iconClass="tab.iconClass"
              :label="tab.label"
              :isActive="tab.id === activeTab"
              @update:activeTab="activeTab = $event"
          />
        </div>
      </nav>
    </div>

    <!-- Columna de contenido dinámico -->
    <div class="col-xxl-8 col-lg-8">
      <div class="profile__tab-content">
        <Suspense>
          <template #default>
            <!-- Contenido para la pestaña "Profile" -->
            <ProfileContent v-if="activeTab === 'nav-profile-tab'" :user="user" @logout="emitLogout"/>
          </template>
          <template #fallback>
            <AppLoader/>
          </template>
        </Suspense>


        <!-- Contenido para la pestaña "Information"
        <ProfileInfo v-if="activeTab === 'nav-information-tab'" />-->

        <!-- Contenido para la pestaña "Address"
        <ProfileAddress v-if="activeTab === 'nav-address-tab'" />-->

        <!-- Contenido para la pestaña "Orders"
        <ProfileOrders v-if="activeTab === 'nav-order-tab'" />-->

        <!-- Contenido para la pestaña "Notifications"
        <ProfileNotifications v-if="activeTab === 'nav-notification-tab'" />-->
      </div>
    </div>
  </div>
</template>

<script>
//import ProfileTabItem from '@/components/profile/ProfileTabItem.vue';
//import ProfileContent from '@/components/profile/ProfileContent.vue';
//import ProfileInfo from '@/components/profile/ProfileInfo.vue';
//import ProfileAddress from '@/components/profile/ProfileAddress.vue';
//import ProfileOrders from '@/components/profile/ProfileOrders.vue';
//import ProfileNotifications from '@/components/profile/ProfileNotifications.vue';
import { defineAsyncComponent } from 'vue';
import AppLoader from "@/components/AppLoader.vue";

export default {

  name: 'ProfileTabs',
  components: {
    AppLoader,
    ProfileTabItem: defineAsyncComponent(() => import('@/components/profile/ProfileTabItem.vue')),
    ProfileContent: defineAsyncComponent(() => import('@/components/profile/ProfileContent.vue')),
    // ProfileInfo: defineAsyncComponent(() => import('@/components/profile/ProfileInfo.vue')),
    // ProfileAddress: defineAsyncComponent(() => import('@/components/profile/ProfileAddress.vue')),
    // ProfileOrders: defineAsyncComponent(() => import('@/components/profile/ProfileOrders.vue')),
    // ProfileNotifications: defineAsyncComponent(() => import('@/components/profile/ProfileNotifications.vue')),

  },
  props: {
    user: Object, // Recibe la información del usuario
  },
  data() {
    return {
      activeTab: localStorage.getItem('activeTab') || 'nav-profile-tab',
      tabs: [
        { id: 'nav-profile-tab', target: 'nav-profile', iconClass: 'fas fa-user-edit', label: 'Profile' },
        { id: 'nav-information-tab', target: 'nav-information', iconClass: 'fas fa-info-circle', label: 'Information' },
        { id: 'nav-address-tab', target: 'nav-address', iconClass: 'fas fa-map-marker-alt', label: 'Address' },
        { id: 'nav-order-tab', target: 'nav-order', iconClass: 'fas fa-clipboard-list', label: 'My Orders' },
        { id: 'nav-notification-tab', target: 'nav-notification', iconClass: 'fas fa-bell', label: 'Notification' },
        { id: 'nav-password-tab', target: 'nav-password', iconClass: 'fas fa-lock', label: 'Change Password' },
      ],
    };
  },
  watch: {
    activeTab(newTab) {
      localStorage.setItem('activeTab', newTab);
    },
  },
  methods: {
    emitLogout() {
      this.$emit('logout'); // Enviar evento al componente padre
    },
  },
};
</script>

<style scoped>
:root {
  --tp-theme-primary: #0989ff; /* Define aquí tu color primario */
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 14px 30px;
  background-color: var(--tp-common-white);
  border: 0;
  border-radius: 0;
  color: #767a7d;
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  background-color: #0989ff0f; /* Fondo azul translúcido */
  color: var(--tp-theme-primary); /* Usa el color primario */
}
</style>