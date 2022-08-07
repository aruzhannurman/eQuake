import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ServerStyleSheet } from 'styled-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
 })
