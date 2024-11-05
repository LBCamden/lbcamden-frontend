import { defineConfig } from 'vite'
import packageJson from "./package.json" with { type: "json" }

const { version } = packageJson

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
        format: 'iife',
        manualChunks: () => 'chunk',
        assetFileNames: (info) => {
          const name = info.names?.[0] ?? info.name

          if (name === 'style.css') {
            return `lbcamden-frontend-${version}.min.css`
          } else {
            return name
          }
        }
      },
    },
    lib: {
      entry: "src/lbcamden/lbcamden-frontend.js",
      formats: [
        'iife'
      ],
      name: "LBCamden",
      fileName: () => `lbcamden-frontend-${version}.min.js`,
    },
  },
})
