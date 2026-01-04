import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Zula/', // Add this line here
  server: {
    host: true,
    port: 3000,
  },
})
