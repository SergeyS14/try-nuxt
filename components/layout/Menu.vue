<script setup lang="ts">
import type { NuxtLink } from '#build/components';
import  MENU_DATA  from '../common/mock/menu.json';

</script>

<template>
    <div>
        <NuxtLink
        v-for="item in MENU_DATA"
        :key="item.name"
        :to="item.url"
        class="item-menu"
        >
        <span>{{ item.name }}</span>
        </NuxtLink>
    </div>
</template>



<style lang="scss">

    .item-menu{
        font-family: 'Freeman';
        text-decoration: none;
        color: black;
        font-size: 1rem;
        @include respond-to(mobile) {
        padding-bottom: 1.5rem;
        font-size: 2rem;
    
        
    }
        
    }
    .item-menu :hover{
        text-decoration: none;
        color: red;
        transition: 0.5s ease-in-out;
    }
</style>