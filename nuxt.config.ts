// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    '@/assets/css/main.css',
  ],

    buildModules: [
    'nuxt-vite'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
