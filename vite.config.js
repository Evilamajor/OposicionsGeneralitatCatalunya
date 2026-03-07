import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for the Oposicions Generalitat Catalunya project
// Adds the base path required for GitHub Pages deployment

export default defineConfig({
  base: '/OposicionsGeneralitatCatalunya/',

  plugins: [react()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true
  },

  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    globals: true
  }
})