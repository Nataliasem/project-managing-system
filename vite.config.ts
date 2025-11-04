import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import Tailwindcss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon')
        }
      }
    }),
    VueDevTools(),
    Tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
