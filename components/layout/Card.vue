<script lang="ts" setup>
import CARD_DATA from '../common/mock/card.json'

const search = ref('')

const filterItem = computed(()=>{
    const query = search.value.toLowerCase().trim();
    if (!query) {
        return CARD_DATA;
    } else {
        return CARD_DATA.filter(item => item.title.toLowerCase().includes(query))
    }

})

</script>

<template>
    <div :class="$style.search">
        <input :class="$style.search__input" type="text" v-model="search" placeholder="search...">
    </div>
    <div :class="$style.catalog">
        <NuxtLink
        style="text-decoration: none;"
        v-for="item in filterItem"
        :key="item.id"
        :to="item.id"
        >
            <article :class="$style.card">
                <img :class="$style.card__img" :src="item.img">
                <span :class="$style.card__title">
                    {{ item.title }}
                </span>
                <div :class="$style.card__subtext">
                    <p :class="$style.card__subtext__title" >{{ item.subtitle }}</p>
                    <p :class="$style.card__subtext__price">цена: {{ item.price }}руб</p>
                </div>
            </article>
        </NuxtLink>
    </div>
</template>



<style lang="scss" module>


    .search{
        text-align: center;
        padding-bottom: 2rem;
        padding-top: 2rem;

        &__input{
            width: 50%;
            height: 1rem;
            border-radius: 1.5rem;
            padding-left: 1rem;
            outline: none;
            border: 1px solid black;
            font-size: 0.6rem;
            @include respond-to(mobile) {
            height: 2rem;
            font-size: 1.5rem;
            
           
        }

            &:focus{
            border: 1px solid green;
            transition: 0.5s ease-in-out;
          
            }
        }
        
    }
    .catalog{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        @include respond-to(mobile) {
            flex-direction: column;
            align-items: center;
            
           
        }
    }

    .card{
        width: 15rem;
        border-radius: 1rem;
        padding: 1rem;
        position: relative;
        @include respond-to(mobile) {
            width: 20rem;
        }

        &__img{
            z-index: 1;
            width: 15rem;
            @include respond-to(mobile) {
            width: 25rem;
        }
        }


        &__title{
            color: black;
            font-size: 1rem;
            box-shadow: none;
            @include respond-to(mobile) {
            font-size: 2rem;
        }
           
        }

        &__subtext{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: black;
            &__title{
                font-size: 0.7rem;
                @include respond-to(mobile) {
                    font-size: 1.5rem;
                }
            }
            &__price{
                font-size: 0.7rem;
                @include respond-to(mobile) {
                    font-size: 1.5rem;
                }
            }
        }

        &:hover{
            -webkit-box-shadow: 8px 6px 58px -15px rgba(0,0,0,0.23);
            -moz-box-shadow: 8px 6px 58px -15px rgba(0,0,0,0.23);
            box-shadow: 8px 6px 58px -15px rgba(0,0,0,0.23);
            transition: 0.4s ease-in-out;
        }
    }

</style>