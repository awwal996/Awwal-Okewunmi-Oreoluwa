import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Performance optimizations
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'] // Separate Three.js into its own chunk for better caching
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
    // Enable CSS code splitting
    cssCodeSplit: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['three']
  }
});
