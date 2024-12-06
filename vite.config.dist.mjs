import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'assets/images/*',
          dest: ''
        }
      ],
      structured: true
    })
  ],
  root: 'src/lbcamden',
  emitIndex: false,
  build: {
    outDir: '../../dist',
    minify: false,
    assetsDir: 'assets',
    emptyOutDir: true,
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
        sourcemap: true,
        inlineDynamicImports: false,
        // generatedCode: "es2015",
        entryFileNames: function (file) {

          if (file.name === 'lbcamden_js') {
            return 'lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
          }

          if (file.name === 'govuk_js') {
            return 'govuk-frontend-4.7.0.min.js' // AW: MUST FIX: MAGIC STRING
          }

          return 'unknown/[name]'
        },
        assetFileNames: function (file) {

          // Rename CSS output
          if (file.name === 'lbcamden_css.css') {
            return 'lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
          }

          // Handle fonts parsed by scss
          if (file.name.endsWith('woff') || file.name.endsWith('woff2')) {
            return 'assets/fonts/[name].[ext]'
          }

          return 'assets/[name].[ext]'
        }

      }
    }
  }

})
