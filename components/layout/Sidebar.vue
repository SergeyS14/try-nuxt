<script>
export default{

    emits:['close'],
    props:['currentUser'],
    
    data () {
        return {
            isModalOpen: false
        }
    },

    methods:{
        logout() {
            this.$emit('logout')
        },
    }
}
</script>

<template>
    
    <div >
        <LayoutModal v-if="isModalOpen" @close="isModalOpen = false"></LayoutModal>
    <aside class="sidebar">
        <div>
        <NuxtLink to="/" >
            <NuxtImg class="sidebar__img" src="/logo.svg" alt="logo" />
        </NuxtLink>
        <nav class="sidebar__nav">
            <ul class="sidebar__ul">
                <li style=" list-style-type:none">
                    <LayoutMenu class="sidebar__item"/>
                </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            </ul>
        </nav>
        </div>
        <div class="sidebar__reg">
            <p v-if="currentUser">login</p>
            <button v-if="currentUser" @click="logout">exit</button>
            <p v-else class="item-login" @click="isModalOpen = true"> Log in</p>
            <p class="item-signup"> Sign up</p>
        </div>
    </aside>
</div>
</template>

<style lang="scss" scoped>


    .sidebar{
        padding:1rem;
        background-color: rgb(235, 235, 235);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        position: fixed;
        @include respond-to(mobile) {
        padding: 0;
        margin: 0;
    }   
        

        &__ul{
            padding: 0;
            margin: 0;
            @include respond-to(mobile) {
            padding: 0;
            margin: 0;
        }
        }
        &__img{
            width: 4rem;
            @include respond-to(mobile) {
            width: 8rem;
           
           
        }
        }

        &__item{
            display:flex;
            flex-direction:column;
        
        }

        &__reg{
            display: flex;
            gap: 0.3rem;
            padding-bottom: 2rem;
            @include respond-to(mobile) {
            flex-direction: column;
            align-items: center;
           
        }
        }

        .item-login {
        font-family: 'Lato';
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        cursor: pointer;
        @include respond-to(mobile) {
       
        font-size: 2rem;
        
        }

        &:hover{
            text-decoration: none;
            color: red;
            transition: 0.5s ease-in-out;
        }
        }
        .item-signup {
        font-family: 'Lato';
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        border-left: 1px solid grey;
        padding-left: 0.2rem;
        cursor: pointer;
        @include respond-to(mobile) {
        border: none;
        font-size: 2rem;
       
        
        }

        &:hover{
            text-decoration: none;
            color: red;
            transition: 0.5s ease-in-out;
        }
        }

       
            
}


</style>