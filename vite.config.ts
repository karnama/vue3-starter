import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '/src'),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js'
        }
    },
    base: process.env.VITE_APP_URL
});
