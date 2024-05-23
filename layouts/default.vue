<script lang="ts" setup>
import Sidebar from '~/components/layout/Sidebar.vue';
import Modal from '~/components/layout/Modal.vue';
import ModalReg from '~/components/layout/ModalReg.vue';

import type {IUser} from '../components/common/types/types'

const currentUser = ref<IUser | null>(null);

const handleAuth = (user: IUser) => {
  currentUser.value = user;
};

const handleLogout = () => {
  currentUser.value = null;
};

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};

const isModalOpenReg = ref(false);

const toggleModalReg = () =>{
  isModalOpenReg.value = !isModalOpenReg.value;
}
</script>

<template>
  <section class="grid">
    <Sidebar :currentUser="currentUser" @logout="handleLogout" @open-modal="toggleModal" @open-modal-reg="toggleModalReg" />
    <div>
      <slot/>
    </div>
    <Modal v-if="isModalOpen" @close="toggleModal" @authenticated="handleAuth" />
    <ModalReg v-if="isModalOpenReg" @close="toggleModalReg" />
  </section>
</template>

<style lang="scss" scoped>

.grid{
    display: grid;
    grid-template-columns: 1fr 8fr;
    min-height: 100vh;
    @include respond-to (mobile){
        grid-template-columns: 1fr 3fr;
            }
}
</style>