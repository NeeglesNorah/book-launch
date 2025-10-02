import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Environment variables
  const PORT = parseInt(process.env.PORT || "3012");

  return {
  plugins: [
    react(), 
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        // Disable optimization for large SVGs to prevent Babel warnings
        svgo: false,
      },
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: PORT,
    host: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'staging.booklaunch.com',
      'booklaunch.com',
      '.booklaunch.com'
    ]
  },
  preview: {
    port: PORT,
    host: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'staging.booklaunch.com',
      'booklaunch.com',
      '.booklaunch.com'
    ]
  },
  // Define global constants
  define: {
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION || '1.0.0'),
  },
  // Optimize dependencies and build settings for large assets
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    // Increase chunk size warning limit for large SVGs
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Handle large assets better
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return `assets/[name]-[hash][extname]`;
          if (/\.(svg)$/.test(assetInfo.name)) {
            return `assets/icons/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    }
  },
  }
})
