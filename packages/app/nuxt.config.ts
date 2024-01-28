// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    '/recettes/**': { isr: true },
  },
  css: ['@unocss/reset/normalize.css', '~/assets/css/main.css'],
  modules: ['@unocss/nuxt', '@nuxt/image', '@nuxtjs/strapi', '@pinia/nuxt'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
  },
  image: {
    quality: 80,
    strapi: {
      baseURL: '',
    },
  },
})
