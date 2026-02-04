import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a simple React application.
// This config enables the React plugin which sets up
// JSX transformation and fast refresh during development.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});