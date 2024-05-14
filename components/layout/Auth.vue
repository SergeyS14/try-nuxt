<script lang="ts" setup>
import USER_DATA from '../common/mock/user.json'
import { ref } from 'vue';

const email = ref('')
const password = ref('')
const user = ref<{ id: string; name: string; email: string; password: string; } | null>(null);
const error = ref<string | null>(null);



const login = () => {
    const foundUser = USER_DATA.find(u => u.email === email.value && u.password === password.value)
    if (foundUser) {
        user.value = foundUser
        error.value = null
        console.log('auth')
    } else {
        error.value = 'no auth'
        console.log('no auth')
    }
}
</script>

<template>
    <div :class="$style.auth">
        <span :class="$style.auth__item">Введите почту</span>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" v-model="email" type="email" placeholder="email">
        <span :class="$style.auth__item">Введите пароль</span>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" v-model="password" type="password" placeholder="password">
        <button :class="$style.auth__btn" @click="login">login</button>
        <p v-if="error" :class="$style.error">{{ error }}</p>
    </div>
</template>



<style lang="scss" module>
    .auth{
        display: flex;
        flex-direction: column;
        align-items: center;


        &__item{
            font-size: 0.8rem;
            padding-bottom: .2rem;
        }

        &__input{
            border: 1px solid grey;
            border-radius: 1rem;
            height: 1rem;
            padding-left: 1rem;
            font-size: 0.6rem;
            &:focus{
                border: 1px solid green;
                transition: .5s ease-in-out;
                outline: none;
            }
        }

        &__btn{
           margin-top: 1rem;
           width: 4rem;
           padding-top: .2rem;
           padding-bottom: .2rem;
           background-color: white;
           border-radius: 1rem;
           border-style: none;
           border: 1px solid grey;
           font-size: 0.6rem;
           &:hover{
            border: 1px solid green;
            color: green;
            transition: .5s ease-in-out;
           }
        }
        &__input.error{
            border: 1px solid red;
            transition: .5s ease-in-out;
            
        }
    }

    .error{
        color: red;
    }
</style>