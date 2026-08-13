import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4731
  },
  base: '/aispectrum/', 
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg', '**/*.webp'],
  build: {
    assetsInlineLimit: 0, // Don't inline any assets
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
})
