// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js
export default defineNuxtConfig({
  css: [
    // SCSS file in the project
    "~/assets/sass/main.sass", // you should add main.scss somewhere in your app
  ],
  nitro: {
    preset: "firebase",
    firebase: {
      gen: 2,
    },
  },
});
