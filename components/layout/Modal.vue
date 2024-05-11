<script>
export default{
methods :{
    close(){
        this.$emit('close')
    }
}
}
</script>
<template>
    <div class="modal" @click.self="close">
        <div class="modal__block">
            <div>
                <button class="modal__btn" @click="close">
                    close
                </button>
            </div>
            <div class="modal__item">
                <p>asdasdasdasdasdasd</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.modal{
    position: fixed;
    inset: 0;
    z-index: 10;
    background-color: (rgb(0, 0, 0, 50%));
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    

    &__block{
        background-color: white;
        width: 40rem;
        height: 20rem;
        border-radius: 1rem;
    }
    &__item{
        padding: 2rem;
        font-size: 1rem;
    }
    &__btn{
        &:focus{
            outline: none;
        }
    }
}
</style>