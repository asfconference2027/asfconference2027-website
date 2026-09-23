import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Always '/' for local dev and the real custom domain. Only the GitHub
  // Actions Pages-preview build overrides this via VITE_BASE_PATH, since
  // that build is served under a /asfconference2027-website/ subpath —
  // see .github/workflows/deploy.yml.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
