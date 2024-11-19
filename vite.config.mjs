import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'

const fontFileExtensions = [
    ".woff",
    ".woff2"
];

export default defineConfig({
    define: {
        '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
        viteStaticCopy({
          targets: [
            {
              src: 'package.json',
              dest: './'
            },
            {
                src: 'assets/images/*',
                dest: 'dist'
            },
            {
              src: '**/*',
              dest: 'lbcamden'
            },
            {
              src: 'README.md',
              dest: './'
            }
          ],
          structured:true
        })
    ],
    root: 'src/lbcamden',
    emitIndex: false,
    build: {
        outDir: '../../package-vite',
        minify: true,
        assetsDir: 'dist/assets',
        emptyOutDir: true,
        assetsInclude: ['**/*.md'],
        rollupOptions: {
            manualChunks: false,
            treeshake: false,
            inlineDynamicImports:true,
            input: {
              govuk_js: './node_modules/govuk-frontend/govuk/all.js',
              lbcamden_js: './src/lbcamden/all.js',
              lbcamden_css: './src/lbcamden/all.scss'

            },
            output: {
              inlineDynamicImports : false,
              entryFileNames: function(file) {
                console.log("🐱" + JSON.stringify(file, null, 4))
                
                // if(file.name == 'lbcamden_css') {
                //   return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
                // }
                
                if(file.name == 'lbcamden_js') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
                }

                if(file.name == 'govuk_js') {
                  return 'dist/govuk-frontend-4.7.0.min.js' //AW: MUST FIX: MAGIC STRING
                }

                return`aaa-dist/[name].js`
              },
              chunkFileNames: function(file) {
                console.log("🐵" + JSON.stringify(file, null, 4))
                if(file.name == 'index.js') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
                }

                return`bbb-dist/[name].js`
              },
              assetFileNames: function (file) {
                console.log("🐶" + JSON.stringify(file, null, 4))
                if(file.name == 'lbcamden_css.css') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
                }

                if(file.name == 'lbcamden_readme') {
                  return `[name].[ext]`
              }

                

                if(file.name.endsWith('woff') || file.name.endsWith('woff2')) {
                    return `dist/assets/fonts/[name].[ext]`
                }

                return `dist/assets/[name].[ext]`;
                },
              
            }
        }
    }

})