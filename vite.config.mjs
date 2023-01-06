import { defineConfig } from 'npm:vite@^4.0.0'
import react from 'npm:@vitejs/plugin-react-swc@^3.0.0'

// https://vitejs.dev/config/
import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0/client'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()]
})
