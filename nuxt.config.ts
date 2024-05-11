// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
  
})