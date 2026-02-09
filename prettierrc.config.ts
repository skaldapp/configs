import type { Config } from "prettier";

const endOfLine = "auto",
  jsdocCommentLineStrategy = "keep",
  plugins = [
    "@prettier/plugin-pug",
    "prettier-plugin-jsdoc",
    "prettier-plugin-packagejson",
  ],
  tsdoc = true;

export default {
  endOfLine,
  jsdocCommentLineStrategy,
  plugins,
  tsdoc,
} satisfies Config;
