import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Solo usar base en producción para GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/finanzas-sensibles-demo/' : '/',
  build: {
    outDir: 'dist'
  }
})