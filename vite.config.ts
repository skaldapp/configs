import unoCSS from "@unocss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";
import tsconfigPaths from "vite-tsconfig-paths";

const base = "./",
  define = {
    __APP_VERSION__: JSON.stringify(process.env["npm_package_version"]),
  },
  plugins = [vue(), vueDevTools(), unoCSS(), tsconfigPaths()];

export default defineConfig({ base, define, plugins });
