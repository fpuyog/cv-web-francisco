import { defineConfig } from 'vite';

export default defineConfig({
    base: '/cv-web-francisco/',
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'dist'
    }
});
