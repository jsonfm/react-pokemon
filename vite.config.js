import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: "/pokedex/",
    plugins: [react()],
    server: {
        host: '0.0.0.0',
    },
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
});