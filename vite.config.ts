import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const includeDevtools = !process.env.CI && !process.env.PLAYWRIGHT

const config = defineConfig({
  server: {
    watch: {
      ignored: ['**/src/routeTree.gen.ts'],
    },
  },
  plugins: [
    ...(includeDevtools
      ? devtools({
          eventBusConfig: {
            enabled: false,
          },
        })
      : []),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    svgr(),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
