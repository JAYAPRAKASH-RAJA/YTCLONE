// vite.config.ts
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  server:{
    port:3000,
  },
 
  plugins: [preact()],
});
