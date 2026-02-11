import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals:{ ...globals.browser,
    "p5": "readonly",
    "createCanvas": "readonly",
    "background": "readonly",
    "setup": "readonly",
    "draw": "readonly",
    "fill": "readonly",
    "rect": "readonly",
    "ellipse": "readonly",
    "stroke": "readonly",
    "line": "readonly",
    "noLoop": "readonly",
    "angleMode": "readonly",
    "translate": "readonly",
    "rotate": "readonly",
    "DEGREES": "readonly"

  } }},
  pluginJs.configs.recommended,
];