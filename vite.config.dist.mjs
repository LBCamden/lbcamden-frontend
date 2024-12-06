import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import glob from 'glob'
// import path from 'node:path'
// import { fileURLToPath } from 'node:url'

import del from 'rollup-plugin-delete'
// import yaml from '@rollup/plugin-yaml'

// import fixtures from './rollup-plugin-fixtures'

// const { GlobSync: globSync } = glob

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  plugins: [
    // del({
    //   targets: ['dist'],
    //   verbose: true
    // }),
    viteStaticCopy({
      targets: [
        {
          src: 'assets/images/*',
          dest: ''
        },
      ],
      structured: true
    })
  ],
  root: 'src/lbcamden',
  emitIndex: false,
  assetsInclude: ['**/*.md', '**/*.woff', '**/*.woff2'],
  build: {
    outDir: '../../dist',
    minify: false,
    assetsDir: 'assets',
    emptyOutDir: true,
    // assetsInclude: ['**/*.md', '**/*.yaml'],
    rollupOptions: {
      manualChunks: false,
      treeshake: false,
      inlineDynamicImports: true,
      input: {
        govuk_js: './node_modules/govuk-frontend/govuk/all.js',
        lbcamden_js: './src/lbcamden/all.js',
        lbcamden_css: './src/lbcamden/all.scss',
      },
      output: {
        inlineDynamicImports: false,
        // generatedCode: "es2015",
        entryFileNames: function (file) {

          if (file.name === 'lbcamden_js') {
            return 'lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
          }

          if (file.name === 'govuk_js') {
            return 'govuk-frontend-4.7.0.min.js' // AW: MUST FIX: MAGIC STRING
          }

          return 'aaa-dist/[name].js'
        },
        assetFileNames: function (file) {
          // console.log("🐶" + JSON.stringify(file, null, 4))

          // Rename CSS output
          if (file.name === 'lbcamden_css.css') {
            return 'lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
          }

          // Handle fonts
          if (file.name.endsWith('woff') || file.name.endsWith('woff2')) {
            return 'assets/fonts/[name].[ext]'
          }

          return 'assets/[name].[ext]'
        }

      }
    }
  }

})
