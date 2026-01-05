import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      // Brotli compression (best compression)
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024, // Only compress files > 1KB
        deleteOriginFile: false,
      }),
      // Gzip compression (fallback for older browsers)
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
        deleteOriginFile: false,
      }),
      {
        name: 'generate-sitemap',
        apply: 'build',
        enforce: 'post',
        async closeBundle() {
          const { writeSitemap } = await import('./src/utils/sitemap.js');
          writeSitemap();
          console.log('🚀 Sitemap généré avant déploiement');
        },
      },
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '@src': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@data': path.resolve(__dirname, './src/data'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@assets': path.resolve(__dirname, './src/assets'),
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          passes: 2 // More aggressive compression
        }
      },
      rollupOptions: {
        treeshake: {
          preset: 'recommended',
          moduleSideEffects: false
        },
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
            framer: ['framer-motion'],
            cloudinary: ['@cloudinary/react', '@cloudinary/url-gen']
          }
        }
      }
    }
  };
});

