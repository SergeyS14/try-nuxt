<script setup>


</script>

<template>
    
<section class="grid">
    <LayoutSidebar />
    <div>
        <slot/>
    </div>
</section>
</template>

<style scoped>

.grid{
    display: grid;
    grid-template-columns: 1fr 8fr;
    min-height: 100vh;
    
}
</style>