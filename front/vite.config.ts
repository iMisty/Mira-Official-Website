/*
 * @Author: Miya
 * @Date: 2022-05-05 21:32:01
 * @LastEditTime: 2022-05-05 21:32:02
 * @LastEditors: Miya
 * @Description: Vite config
 * @FilePath: \front\vite.config.ts
 */
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 12450,
    proxy: {
      '/api': {
        target: 'http://localhost:12451/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    include: ['axios'],
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
  },
  base: './',

  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, './src'),
    },
  },
  plugins: [vue(), vueJSX()],
});
