<script lang="ts" setup>
import USER_DATA from '../common/mock/user.json'
import { ref, defineEmits} from 'vue';


const email = ref('')
const password = ref('')
const user = ref<{ id: string; name: string; email: string; password: string; } | null>(null);
const error = ref<string | null>(null);

const emit = defineEmits(['authenticated'])

const login = () => {
    const foundUser = USER_DATA.find(u => u.email === email.value && u.password === password.value)
    if (foundUser !== undefined) {
        user.value = foundUser
        error.value = null
        console.log('auth')
        emit('authenticated', foundUser)
    } else {
        error.value = 'Не правильный логин или пароль'
        console.log('no auth')
        password.value = ''
    }
}



const clearError = () =>{
    error.value = null;
}

</script>

<template>
    <div :class="$style.auth">
        <span :class="$style.auth__item">Введите почту</span>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" 
            v-model="email" 
            type="email" 
            placeholder="email" 
            @input="clearError"
            >
        <span :class="$style.auth__item">Введите пароль</span>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" 
            v-model="password" 
            type="password" 
            placeholder="password"
            @input="clearError"
            >
        <button :class="$style.auth__btn" @click="login">login</button>
        <p v-if="error" :class="$style.errorText">{{ error }}</p>
    </div>
</template>



<style lang="scss" module>
    .auth{
        display: flex;
        flex-direction: column;
        text-align: start;


        &__item{
            font-size: 0.8rem;
            padding-bottom: .2rem;
            @include respond-to (mobile){
                font-size: 3rem;
            }
        }

        &__input{
            border: 1px solid grey;
            border-radius: .3rem;
            height: 1rem;
            padding-left: 1rem;
            font-size: 0.6rem;
            @include respond-to (mobile){
                height: 2.5rem;
                font-size: 2rem;
            }
            &:focus{
                border: 1px solid green;
                transition: .5s ease-in-out;
                outline: none;
            }
        }

        &__btn{
           margin-top: 1rem;
           
           padding-top: .2rem;
           padding-bottom: .2rem;
           background-color: white;
           border-radius: .3rem;
           border-style: none;
           border: 1px solid grey;
           font-size: 0.6rem;
           outline: none;
           @include respond-to (mobile){
                height: 3rem;
                font-size: 2rem;
            }
           &:hover{
            border: 1px solid green;
            color: green;
            transition: .5s ease-in-out;
           }
           &:focus{
            border: 1px solid grey;
            color: black;
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
    .errorText{
        color: red;
        font-size: .7rem;
        @include respond-to (mobile){
                font-size: 2rem;
            }
    }
</style>