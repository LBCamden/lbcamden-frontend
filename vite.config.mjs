import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import glob from 'glob'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import del from 'rollup-plugin-delete'
import yaml from '@rollup/plugin-yaml'

import fixtures from './rollup-plugin-fixtures'

const { GlobSync: globSync } = glob

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  plugins: [
    yaml({
      safe:true,
      }),
      del({
        targets: ['dist', 'package-vite'],
        verbose: true
      }),
      del({
        targets: ['dist/lbcamden'],
        hook: 'closeBundle',
        verbose: true
      }),
    fixtures(),
    viteStaticCopy({
      targets: [
        {
          src: 'package.json',
          dest: 'package-vite/'
        },
        {
          src: 'assets/images/*',
          dest: 'dist'
        },
        // {
        //   src: '**/[!.]*',
        //   dest: 'package-vite/lbcamden/'
        // },
        // {
        //     src: '**/[!.]*',
        //     dest: 'package-vite/lbcamden/'
        // },
        {
          src: '**/*.woff',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.woff2',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.jpg',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.png',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.webp',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.scss',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.xml',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.ico',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/manifest.json',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: '**/*.njk',
          dest: 'package-vite/lbcamden/'
        },
        {
          src: ['**/*.js', '!**/*.test.js'],
          dest: 'package-vite/lbcamden/'
        },
        {
          src: ['**/*.map'],
          dest: 'package-vite/lbcamden/'
        },
        {
          src: 'README.md',
          dest: 'package-vite/'
        },
        {
          src: '**/components/**/README.md',
          dest: 'package-vite/lbcamden'
        }
      ],
      structured: true
    })
  ],
  root: 'src/lbcamden',
  emitIndex: false,
  assetsInclude: ['**/*.md', '**/*.woff', '**/*.woff2'],
  build: {
    outDir: '../../',
    minify: true,
    assetsDir: 'dist/assets',
    emptyOutDir: false,
    // assetsInclude: ['**/*.md', '**/*.yaml'],
    rollupOptions: {
      manualChunks: false,
      treeshake: false,
      inlineDynamicImports: true,
      input: {
        govuk_js: './node_modules/govuk-frontend/govuk/all.js',
        lbcamden_js: './src/lbcamden/all.js',
        lbcamden_css: './src/lbcamden/all.scss',
        ...Object.fromEntries(
          globSync('./src/lbcamden/components/**/*.yaml').found.map(file => [
            // This remove `src/` as well as the file extension from each
            // file, so e.g. src/nested/foo.js becomes nested/foo
            path.relative(
              'src',
              file.slice(0, file.length - path.extname(file).length) + '-fixtures' + path.extname(file)
            ),
            // This expands the relative paths to absolute paths, so e.g.
            // src/nested/foo becomes /project/src/nested/foo.js
            fileURLToPath(new URL(file, import.meta.url))
          ])
        )
      },
      output: {
        inlineDynamicImports: false,
        entryFileNames: function (file) {
          // console.log('🐱' + JSON.stringify(file, null, 4))

          if (file.name.endsWith('yaml')) {
            // console.log('YAML')
            // console.log('dist/' + path.dirname(file.name) + '.yaml')
            return 'dist/' + path.dirname(file.name) + '.yaml'
          }

          if (file.name === 'lbcamden_js') {
            return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
          }

          if (file.name === 'govuk_js') {
            return 'dist/govuk-frontend-4.7.0.min.js' // AW: MUST FIX: MAGIC STRING
          }

          return 'dist/aaa-dist/[name].js'
        },
        chunkFileNames: function (file) {
          console.log('🐵' + JSON.stringify(file, null, 4))
          // if(file.name == 'index.js') {
          //     return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
          // }

          return 'dist/bbb-dist/[name].js'
        },
        assetFileNames: function (file) {
          // console.log("🐶" + JSON.stringify(file, null, 4))

          // Rename CSS output
          if (file.name === 'lbcamden_css.css') {
            return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
          }

          // Handle fonts
          if (file.name.endsWith('woff') || file.name.endsWith('woff2')) {
            return 'dist/assets/fonts/[name].[ext]'
          }

          return 'dist/assets/[name].[ext]'
        }

      }
    }
  }

})
