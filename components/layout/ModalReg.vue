<script lang="ts" setup>
import USER_DATA from '../common/mock/user.json';

const name = ref('');
const email = ref('');
const password = ref('');
const secPassword = ref('');
const error = ref<string | null>(null);

const emit = defineEmits([ 'close']);

const login = () => {
  const foundUser = USER_DATA.find(u => u.email === email.value && u.password === password.value);
  if (foundUser) {
    error.value = null;

    emit('close'); 
  } else {
    error.value = 'Invalid email or password';
    password.value = '';
  }
};

const validEmail = (email: string) =>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

const reg = () =>{
    if (!name.value) {
        error.value = 'not name';
        return;
    }
    if (!email.value) {
        error.value = 'not email';
        return;
    }
    if (!validEmail(email.value)) {
        error.value = 'invalid format email';
        return;
    }
    if (!password.value) {
        error.value = 'not passsword';
        return;
    }
    if (password.value !== secPassword.value) {
        error.value = 'not repeat password';
        return;
    }

    const foundUser = USER_DATA.find(u => u.email === email.value);
    if (foundUser) {
        error.value = 'email registered';
        return;
    }

    error.value = null;

    emit('close');
}

const clearError = () => {
  error.value = null;
};

const close = () => {
  emit('close');
};
</script>

<template>
  <div :class="$style.modal" @click.self="close">
    <div :class="$style.modal__block">
      <div>
        <button :class="$style.modalBtn" @click="close">
          <NuxtImg width="25" height="25" :class="$style.sidebar__img" src="/close.svg" alt="logo" />
        </button>
      </div>
      <div :class="$style.auth">
        <lable :for="name" :class="$style.auth__item">Enter Name</lable>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" v-model="name" type="name" placeholder="name" @input="clearError">
        <lable :for="email" :class="$style.auth__item">Enter Email</lable>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" v-model="email" type="email" placeholder="email" @input="clearError">
        <label :for="password" :class="$style.auth__item">Enter Password</label>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" v-model="password" type="password" placeholder="password" @input="clearError">
        <label :for="secPassword" :class="$style.auth__item">Enter Password repeat</label>
        <input :class="{[$style.auth__input]: true, [$style.error]:error}" v-model="secPassword" type="password" placeholder="password" @input="clearError">
        <button :class="$style.auth__btn" @click="reg">Registration</button>
        <p v-if="error" :class="$style.errorText">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" module>
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
        height: 19rem;
        border-radius: 1rem;
        text-align: end;
        @include respond-to (mobile){
            width: 90%;
            height: 50%;
        }
    }
    &Btn{
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

    .auth{
        display: flex;
        flex-direction: column;
        text-align: start;
        padding: 0rem 2rem 0rem 2rem;


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
            margin-bottom: 0.3rem;
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