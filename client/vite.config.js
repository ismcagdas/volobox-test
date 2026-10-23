import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Volobox previews open the dev server on a sandbox address (*.e2b.app) or a
    // Cloudflare quick tunnel (*.trycloudflare.com); Vite refuses hosts it does not know.
    allowedHosts: ['.e2b.app', '.trycloudflare.com'],
  },
})
