<template>
  <nav>
    <div class="nav nav-tabs tp-tab-menu flex-column" id="profile-tab" role="tablist">
      <ProfileTabItem
          v-for="tab in tabs"
          :key="tab.id"
          :id="tab.id"
          :target="tab.target"
          :iconClass="tab.iconClass"
          :label="tab.label"
          :active="tab.id === activeTab"
          @update:activeTab="activeTab = $event"
      />
    </div>
  </nav>
</template>

<script>
import ProfileTabItem from '@/components/profile/ProfileTabItem.vue';

export default {
  name: 'ProfileTabs',
  components: { ProfileTabItem },
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
};
</script>

<style scoped>
/* Estilos para las pestañas */
</style>
