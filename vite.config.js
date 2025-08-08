import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Britney-first-portfolio/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  },
  module: {
    loaders: [
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
  }
})
