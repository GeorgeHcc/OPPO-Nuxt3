// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";
export default defineNuxtConfig({
  runtimeConfig: {},
  css: ["~/assets/css/global.scss", "~/assets/css/iconfont.css"],
  app: {
    head: {
      title: "OPPO官网-Nuxt3",
      meta: [
        {
          name: "description",
          content: "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // { rel: "stylesheet", href: "https://liujun.css" }
      ],
      // add head
      // script: [{ src: "https://liujun.js" }],
      noscript: [{ children: "Javascript is required" }],
      //   bodyAttrs:{style:"margin:0"}
    },
  },
  build: {
    transpile: ["element-plus/es"],
  },
  modules: [
    "@element-plus/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          "storeToRefs", // import { storeToRefs } from 'pinia'
        ],
      },
    ],
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/variables.scss' as *; ",
        },
      },
    },
    plugins: [ElementPlus()],
  },
});
