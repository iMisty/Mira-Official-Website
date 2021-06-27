/*
 * @Author: Miya
 * @Date: 2021-06-28 00:29:06
 * @LastEditTime: 2021-06-28 00:30:24
 * @LastEditors: Miya
 * @Description: vite.config.ts
 * @FilePath: \Single-Search-Backend\vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7478,
    proxy: {
      "/api": {
        target: "http://localhost:12450/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  optimizeDeps: {
    include: ["axios"],
  },
  // 打包配置
  build: {
    target: "modules",
    outDir: "dist", //指定输出路径
    assetsDir: "assets", // 指定生成静态资源的存放路径
    minify: "terser", // 混淆器，terser构建后文件体积更小
  },
  base: "./",

  resolve: {
    alias: {
      "/@/": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), vueJSX()],
});
