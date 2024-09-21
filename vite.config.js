import { resolve } from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vueJsx()
    ],

    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },

    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib.js'),
            name: 'Kui-vue',
            formats: ['es'],
            fileName: (format) => `kui-vue.${format}.js`
        },

        rollupOptions: {
            external: ['vue', 'tailwindcss', '@headlessui/vue', '@iconify/vue', 'flatpickr', 'vue-toastification'],

            output: {
                assetFileNames: (chunkInfo) => {
                    if (/css$/.test(chunkInfo.name)) {
                        return `kui-vue.css`
                    }
                }
            },
        },

        sourcemap: true,

        emptyOutDir: true,
    }
})
