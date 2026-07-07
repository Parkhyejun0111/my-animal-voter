import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my_uiux_01/', 
  plugins: [react()],
})