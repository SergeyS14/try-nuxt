<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps<{ currentUser: {id:string; name: string; email:string; password: string;} | null}>();
const emit = defineEmits(['logout', 'open-modal']);

const isModalOpen = ref(false);

const logout = () => {
  emit('logout');
};

const openModal = () => {
  emit('open-modal');
};

const currentUser = computed(() => props.currentUser);
</script>

<template>
  <div>
    <LayoutModal v-if="isModalOpen" @close="isModalOpen = false"></LayoutModal>
    <aside class="sidebar">
      <div>
        <NuxtLink to="/">
          <NuxtImg class="sidebar__img" src="/logo.svg" alt="logo" />
        </NuxtLink>
        <nav class="sidebar__nav">
          <ul class="sidebar__ul">
            <li style="list-style-type:none">
              <LayoutMenu class="sidebar__item"/>
            </li>
            <li v-if="currentUser" style="list-style-type:none">
                <NuxtLink to="cabinet">
                    <p class="sidebar__cabinet">asdasd</p>
                </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar__reg">
        <p class="item-login" v-if="currentUser"  @click="logout">logout {{ currentUser.name }}</p>
        <p v-else class="item-login" @click="openModal">Log in</p>
        <p v-if="!currentUser" class="item-signup">Sign up</p>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" scoped>


    .sidebar{
        padding:1rem;
        background-color: rgb(235, 235, 235);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        position: fixed;
        @include respond-to(mobile) {
        padding: 0;
        margin: 0;
    }   
        
        &__cabinet{
            font-family: 'Freeman';
            text-decoration: none;
            color: black;
            font-size: 1rem;
            @include respond-to(mobile) {
            padding-bottom: 1.5rem;
            font-size: 2rem;}
            &:hover{
                text-decoration: none;
                color: red;
                transition: 0.5s ease-in-out;
            }
        }

        &__ul{
            padding: 0;
            margin: 0;
            @include respond-to(mobile) {
            padding: 0;
            margin: 0;
        }
        }
        &__img{
            width: 4rem;
            @include respond-to(mobile) {
            width: 8rem;
           
           
        }
        }

        &__item{
            display:flex;
            flex-direction:column;
        
        }

        &__reg{
            display: flex;
            gap: 0.3rem;
            padding-bottom: 2rem;
            @include respond-to(mobile) {
            flex-direction: column;
            align-items: center;
           
        }
        }

        .item-login {
        font-family: 'Lato';
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        cursor: pointer;
        @include respond-to(mobile) {
       
        font-size: 2rem;
        
        }

        &:hover{
            text-decoration: none;
            color: red;
            transition: 0.5s ease-in-out;
        }
        }
        .item-signup {
        font-family: 'Lato';
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        border-left: 1px solid grey;
        padding-left: 0.2rem;
        cursor: pointer;
        @include respond-to(mobile) {
        border: none;
        font-size: 2rem;
       
        
        }

        &:hover{
            text-decoration: none;
            color: red;
            transition: 0.5s ease-in-out;
        }
        }

       
            
}


</style>