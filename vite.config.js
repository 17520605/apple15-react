import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "jsm-x9",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "k2group",
    project: "javascript-react-2"
  })],
  server: {
    host: process.env.VITE_HOST || 'localhost',
    port: Number(process.env.VITE_PORT) || 3000
  },
  build: {
    sourcemap: true
  }
})