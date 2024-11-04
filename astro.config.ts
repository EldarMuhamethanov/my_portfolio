import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

const SERVER_PORT = 3000

const SCRIPT = process.env.npm_lifecycle_script || ''

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: 'https://eldar-m10v.ru',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
