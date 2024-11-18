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
                src: 'assets/**/*',
                dest: 'dist'
            },
            {
              src: '**/*',
              dest: 'lbcamden'
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
        rollupOptions: {
            manualChunks: false,
            treeshake: false,
            inlineDynamicImports:true,
            output: {
              inlineDynamicImports : true,
              entryFileNames: function(file) {
                console.log(">>>>>>" + JSON.stringify(file, null, 4))
                if(file.name == 'index') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
                }

                return`aaa-dist/[name].js`
              },
              chunkFileNames: function(file) {
                
                if(file.name == 'index.js') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.js'
                }

                return`dist/[name].js`
              },
              assetFileNames: function (file) {
                // console.log("<<<<<>>>>>>>>>>>" + JSON.stringify(file, null, 4))
                if(file.name == 'index.css') {
                    return 'dist/lbcamden-frontend-' + (process.env.npm_package_version) + '.min.css'
                }


                return fontFileExtensions.includes(file.name)
                  ? `dist/assets/fonts/[name].[ext]`
                  : `dist/assets/[name].[ext]`;
                },
              
            }
        }
    }

})