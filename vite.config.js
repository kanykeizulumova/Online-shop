import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/Online-shop/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})
