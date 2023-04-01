import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./BankAccount": "./main-lib.ts",
      },
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,
    target: "esnext",
  },
});
