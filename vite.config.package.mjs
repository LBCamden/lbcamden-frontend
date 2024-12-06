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
        targets: ['package-vite'],
        verbose: true
      }),
      del({
        targets: ['package-vite/to-be-deleted'],
        hook: 'closeBundle',
        verbose: true
      }),
    fixtures(),
    viteStaticCopy({
      targets: [
        {
          src: 'package.json',
          dest: './'
        },
        {
          src: '../../dist/*',
          dest: './'
        },
        // {
        //   src: '**/[!.]*',
        //   dest: '/lbcamden/'
        // },
        // {
        //     src: '**/[!.]*',
        //     dest: '/lbcamden/'
        // },
        {
          src: '**/*.woff',
          dest: './lbcamden/'
        },
        {
          src: '**/*.woff2',
          dest: './lbcamden/'
        },
        {
          src: '**/*.jpg',
          dest: './lbcamden/'
        },
        {
          src: '**/*.png',
          dest: './lbcamden/'
        },
        {
          src: '**/*.webp',
          dest: './lbcamden/'
        },
        {
          src: '**/*.scss',
          dest: './lbcamden/'
        },
        {
          src: '**/*.xml',
          dest: './lbcamden/'
        },
        {
          src: '**/*.ico',
          dest: './lbcamden/'
        },
        {
          src: '**/manifest.json',
          dest: './lbcamden/'
        },
        {
          src: '**/*.njk',
          dest: './lbcamden/'
        },
        {
          src: ['**/*.js', '!**/*.test.js'],
          dest: './lbcamden/'
        },
        {
          src: ['**/*.map'],
          dest: './lbcamden/'
        },
        {
          src: 'README.md',
          dest: './'
        },
        {
          src: '**/components/**/README.md',
          dest: './lbcamden'
        }
      ],
      structured: true
    })
  ],
  root: 'src/lbcamden',
  emitIndex: false,
  assetsInclude: ['**/*.md'],
  build: {
    outDir: '../../package-vite',
    minify: false,
    emptyOutDir: false,
    // assetsInclude: ['**/*.md', '**/*.yaml'],
    rollupOptions: {
      manualChunks: false,
      treeshake: false,
      inlineDynamicImports: true,
      input: {
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
        // generatedCode: "es2015",
        entryFileNames: function (file) {
          // console.log('🐱' + JSON.stringify(file, null, 4))

          if (file.name.endsWith('yaml')) {
            // console.log('YAML')
            // console.log('dist/' + path.dirname(file.name) + '.yaml')
            return 'to-be-deleted/' + path.dirname(file.name) + '.yaml'
          }
          return 'to-be-deleted/[name].js'
        },
        assetFileNames: function (file) {

          return 'to-be-deleted/[name].[ext]'
        }

      }
    }
  }

})
