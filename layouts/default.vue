<script >
import Auth from '~/components/layout/Auth.vue';
import Sidebar from '~/components/layout/Sidebar.vue';

export default {
  components: {
    Auth,
    Sidebar
  },
  data() {
    return {
      currentUser: null
    }
  },
  methods: {
    handleAuthentication(user) {
      this.currentUser = user
    },
    handleLogout() {
      this.currentUser = null
    },

  }
}
</script>

<template>
    
<section class="grid">

    <Sidebar :currentUser="currentUser" @logout="logout" />
    <div>
        <slot/>
    </div>
</section>
</template>

<style lang="scss" scoped>

.grid{
    display: grid;
    grid-template-columns: 1fr 8fr;
    min-height: 100vh;
    @include respond-to (mobile){
        grid-template-columns: 1fr 4fr;
            }
}
</style>