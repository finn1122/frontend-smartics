<template>
      <section class="profile__area pt-120 pb-120">
        <div class="container">
          <div class="profile__inner p-relative">
            <div class="profile__shape">
              <div class="profile-view col-xxl-4 col-lg-4">
                <ProfileTabs />
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import ProfileTabs from '@/components/profile/ProfileTabs.vue';

export default {
  name: 'ProfileView',
  components: {
    ProfileTabs,
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