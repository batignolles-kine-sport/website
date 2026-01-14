import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { getRoutes } from './src/routes';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, '.', '');
  const isSSG = command === 'build';

  return {
    base: '/',
    server: {
      port: 3100,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      // Only enable PWA for client build, not SSG
      !isSSG && VitePWA({
        registerType: 'prompt',
        injectRegister: false,
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'Batignolles Kiné Sport',
          short_name: 'BKS Kiné',
          description: 'Cabinet de kinésithérapie du sport à Paris 17 - Batignolles',
          theme_color: '#0D2918',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/res\.cloudinary\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'cloudinary-images',
                expiration: {
                  maxEntries: 50,
                  maxAgeSeconds: 60 * 60 * 24 * 30
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: ({ request }) => request.mode === 'navigate',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'pages-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 7
                },
                networkTimeoutSeconds: 3
              }
            }
          ]
        }
      }),
    ].filter(Boolean),
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
    // SSG Configuration
    ssgOptions: {
      script: 'async',
      formatting: 'minify',
      crittersOptions: {
        preload: 'swap',
      },
      // Get routes from our routes.ts file
      includedRoutes: (paths) => getRoutes(),
      // Handle errors gracefully during SSG
      onPageRendered: (route, html) => {
        console.log(`✅ Rendered: ${route}`);
        return html;
      },
    },
    // SSR externals - packages that should not be bundled for SSR
    ssr: {
      noExternal: [
        'framer-motion',
        'motion',
        '@cloudinary/react',
        '@cloudinary/url-gen',
        'lucide-react',
        'react-helmet-async',
      ],
    },
    build: {
      target: 'es2015',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          passes: 2
        }
      },
      rollupOptions: {
        treeshake: {
          preset: 'recommended',
          moduleSideEffects: false
        },
        output: {
          // Only apply manualChunks for client build, not SSR
          manualChunks: (id) => {
            // During SSR build, don't chunk externals
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async')) {
                return 'vendor';
              }
              if (id.includes('framer-motion')) {
                return 'framer';
              }
              if (id.includes('@cloudinary')) {
                return 'cloudinary';
              }
            }
            return undefined;
          }
        }
      }
    }
  };
});
