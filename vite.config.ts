import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
import checker from 'vite-plugin-checker';
import envCompatible from 'vite-plugin-env-compatible';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      hashPrefix: 'prefix',
    },
    devSourcemap: true,
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    reportCompressedSize: true,
    rollupOptions: {
      input: {
        main: '/index.html',
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
        sourcemap: false,
      },
    },
  },

  publicDir: 'public',
  plugins: [
    svgr(),
    react(),
    splitVendorChunkPlugin(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint --fix --ext .js,.jsx,.ts,.tsx ./src' },
      stylelint: { lintCommand: 'stylelint **/*.scss --fix' },
    }),
    envCompatible({ prefix: 'VITE' }),
  ],
});
