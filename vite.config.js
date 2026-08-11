import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/orchard-park-tree-service/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
