import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vitest specific config
import { UserConfigExport } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  
} as UserConfigExport)
