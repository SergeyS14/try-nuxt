<script setup lang="ts">
import type { NuxtLink } from '#build/components';
import { MENU_DATA } from './menu.data.ts';

</script>

<template>
    <div>
        <NuxtLink
        v-for="item in MENU_DATA"
        :key="item.name"
        :to="item.url"
        >
        <span>{{ item.name }}</span>
        </NuxtLink>
    </div>
</template>



<style lang="scss" scoped>

</style>