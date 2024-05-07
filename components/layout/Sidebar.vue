<script lang="ts" setup>
</script>

<template>
    <aside class="sidebar">
        <NuxtLink to="/" class="sidebar__img">
            <NuxtImg src="/logo.svg" alt="logo" width="100px"/>
        </NuxtLink>
        <nav class="sidebar__nav">
            <ul >
                <li style=" list-style-type:none">
                    <LayoutMenu class="sidebar__item"/>
                </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            </ul>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

    .sidebar{
        text-align:center;
        padding:2rem;
        color:$blue;
        font-family:'Lato';

        &__nav{
            cursor:pointer;
            
        }

        &__item{
            display:flex;
            flex-direction:column;
           
        }
    }

</style>