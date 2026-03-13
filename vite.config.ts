import unoCSS from "@unocss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

const base = "./",
  define = {
    __APP_VERSION__: JSON.stringify(process.env["npm_package_version"]),
  },
  plugins = [vue(), vueDevTools(), unoCSS()],
  tsconfigPaths = true,
  resolve = { tsconfigPaths };

export default defineConfig({ base, define, plugins, resolve });
