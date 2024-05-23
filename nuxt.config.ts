// https://nuxt.com/docs/api/configuration/nuxt-config

const pathAssets = "assets"

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  devtools: { enabled: false },
  modules: ["@nuxt/image",
  ['@nuxtjs/google-fonts', {
    families: {
      Lato: {
        wght: [100, 400],
        ital: [100]
      },
      Freeman: {
        wght: [100, 400],
        ital: [100]
      },
    }
}]
],
  css:["assets/main.scss"],
  vite: {
    css: {
           preprocessorOptions: {
               scss: {
                   additionalData: `@import "${pathAssets}/variables"; @import "${pathAssets}/mixins"; ;`,
               },
         },
  }}
  
})