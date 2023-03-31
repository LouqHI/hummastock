// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-icon'],
    nitro:{
        plugins:["~/server/index.ts"]
    },
    runtimeConfig:{
        mongodbUri: process.env.MONGODB_URI
    },
    css: ['vuetify/lib/styles/main.sass',  '@mdi/font/css/materialdesignicons.min.css'],
    build: {
      transpile: ['vuetify'],
    },
    vite: {
        define: {
          'process.env.DEBUG': false,
        },
      },
})
