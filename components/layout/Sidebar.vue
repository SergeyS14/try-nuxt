<script lang="ts" setup>
import type { SidebarProps } from '../common/types/types';

const props = defineProps<SidebarProps>();
const emit = defineEmits(['logout', 'open-modal']);

const isModalOpen = ref(false);

const logout = () => {
  emit('logout');
};

const openModal = () => {
  emit('open-modal');
};


</script>

<template>
  <div>
    <LayoutModal v-if="isModalOpen" @close="isModalOpen = false"></LayoutModal>
    <aside :class="$style.sidebar">
      <div>
        <NuxtLink to="/">
          <NuxtImg :class="$style.sidebar__img" src="/logo.svg" alt="logo" />
        </NuxtLink>
        <nav :class="$style.sidebar__nav">
          <ul :class="$style.sidebar__ul">
            <li style="list-style-type:none">
              <LayoutMenu :class="$style.sidebar__item"/>
            </li>
            <li v-if="currentUser" style="list-style-type:none">
                <NuxtLink to="cabinet">
                    <p :class="$style.sidebar__cabinet">asdasd</p>
                </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div :class="$style.sidebar__reg">
        <p :class="$style.itemLogin" v-if="currentUser"  @click="logout">logout {{ currentUser.name }}</p>
        <p v-else :class="$style.itemLogin" @click="openModal">Log in</p>
        <p v-if="!currentUser" :class="$style.itemSignup">Sign up</p>
      </div>
    </aside>
  </div>
</template>

<style lang="scss" module>


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

        .itemLogin {
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
        .itemSignup {
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