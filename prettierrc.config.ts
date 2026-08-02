import type { Config } from "prettier";

const endOfLine = "auto",
  files = ["*.jsonc"],
  jsdocCommentLineStrategy = "keep",
  plugins = [
    "@prettier/plugin-pug",
    "prettier-plugin-jsdoc",
    "prettier-plugin-packagejson",
  ],
  trailingComma = "none",
  tsdoc = true;

export default {
  endOfLine,
  jsdocCommentLineStrategy,
  overrides: [{ files, options: { trailingComma } }],
  plugins,
  tsdoc,
} satisfies Config;
