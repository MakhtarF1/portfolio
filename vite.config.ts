import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: Number(process.env.PORT) || 3000,

    // 👇 Ajoute cette ligne pour autoriser Render
    allowedHosts: ['portfolio-makhtar-fall.onrender.com'],
  },
  preview: {
    allowedHosts: ['portfolio-makhtar-fall.onrender.com'], 
  },
});
