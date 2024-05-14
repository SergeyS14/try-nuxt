<script lang="ts" >
import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { emit }) {
    const close = () => {
      emit('close')
    }

    return {
      close
    }
  }
})
</script>
<template>
    <div class="modal" @click.self="close">
        <div class="modal__block">
            <div>
                <button class="modal__btn" @click="close">
                    <NuxtImg width="25" height="25" class="sidebar__img" src="/close.svg" alt="logo" />
                </button>
            </div>
            <div class="modal__item">
                <LayoutAuth/>
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
        width: 25%;
        height: 20rem;
        border-radius: 1rem;
        text-align: end;
    }
    &__item{
        padding: 2rem;
        font-size: 1rem;
    }
    &__btn{
        margin-right :0.5rem;
        margin-top: .5rem;
        border: none;
        background-color: white;
        cursor: pointer;
        &:focus{
            outline: none;
        }
    }
}
</style>