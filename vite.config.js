// import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        // viteStaticCopy({
        //   targets: [
        //     {
        //       src: 'bin/example.wasm',
        //       dest: 'wasm-files'
        //     }
        //   ]
        // })
    ],
    root: 'src/lbcamden',
    build: {
        outDir: '../../package',
        assetsDir: 'dist/assets',
        emptyOutDir: true
    }

})