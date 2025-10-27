import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          isProd && [
            'transform-remove-console',
            { exclude: ['error', 'warn'] },
          ],
        ].filter(Boolean),
      },
    }),
  ],

  server: {
    port: 5173,
    host: true,
    strictPort: false,
    cors: true,
    open: true,

    // Hot Module Replacement (HMR) Configuration
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },

    // Proxy API requests
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL || 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.error('Proxy error:', err)
          })
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('X-Forwarded-Proto', 'http')
          })
        },
      },
      '/auth': {
        target: process.env.VITE_AUTH_API_URL || 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    target: ['esnext'],
    minify: 'terser',
    sourcemap: isDev,
    
    // Rollup options
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'utils': ['path'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name)) {
            return 'assets/images/[name]-[hash][extname]'
          } else if (/\.css$/.test(name)) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },

    // Production optimization
    terserOptions: {
      compress: {
        drop_console: isProd,
        drop_debugger: isProd,
      },
    },

    cssCodeSplit: true,
    cssTarget: 'chrome61',
  },

  // Module resolution
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },

  // Environment variables prefix
  envPrefix: 'VITE_',

  // CSS preprocessor options
  css: {
    postcss: './postcss.config.js',
    modules: {
      localsConvention: 'camelCase',
    },
  },

  // Define global constants
  define: {
    __DEV__: isDev,
    __PROD__: isProd,
    'process.env.VITE_APP_VERSION': JSON.stringify(process.env.npm_package_version),
  },

  // Optimization
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['node_modules'],
  },

  // Preview server (for production builds)
  preview: {
    port: 4173,
    strictPort: false,
  },
})
