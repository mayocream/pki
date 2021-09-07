import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from 'vite-plugin-babel-macros'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: 'import { jsx } from "@emotion/react"',
  },
  plugins: [reactRefresh(), macrosPlugin(), legacy({
    targets: ['chrome >= 70', 'firefox >= 72', 'edge >= 79', 'safari >= 13']
  })]
})
