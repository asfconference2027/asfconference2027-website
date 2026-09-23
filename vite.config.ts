import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // TEMPORARY: set for previewing at the github.io subpath before the
  // asfconference2027.com.au domain is switched over. Revert to '/' before
  // that cutover — see MIGRATION.md.
  base: '/asfconference2027-website/',
  plugins: [react()],
})
