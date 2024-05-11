<script >
export default{

    emits:['close'],
    
    data () {
        return {
            isModalOpen: true
        }
    }
}


</script>

<template>
    <LayoutModal v-if="isModalOpen" @close="isModalOpen = false"></LayoutModal>
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