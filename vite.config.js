import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

import compression from 'vite-plugin-compression' // 代码压缩
import postcssPresetEnv from 'postcss-preset-env' // css前缀
import legacy from '@vitejs/plugin-legacy' // 浏览器兼容

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8081,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      src: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
      assets: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/assets')
    }
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  },
  plugins: [
    react(),
    compression({ threshold: 10240 }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  build: {
    chunkSizeWarningLimit: 10240,
    brotliSize: false,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/chunk/[name]-[hash].js',
        entryFileNames: 'assets/chunk/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          'chunk-vendor': ['react', 'react-dom']
        }
      }
    }
  }
})
