import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'ES2022',
    emptyOutDir: true,
    outDir: 'build',
    rollupOptions: {
      // Flatten because I had issues with nested folders in nginx
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
})
