import { extractorArbitraryVariants } from "@unocss/extractor-arbitrary-variants";
import extractorPug from "@unocss/extractor-pug";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig } from "@unocss/vite";

const extractors = [extractorPug(), extractorArbitraryVariants()],
  transformers = [
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ];

export default defineConfig({ extractors, transformers });
