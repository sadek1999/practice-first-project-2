import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from 'globals'

export default tseslint.config(
  {
    rules: {
        "no-unused-vars": "error",
        "no-unused-expressions": "error",
        "prefer-const": "error",
        "no-console": "warn",
        "no-undef": "error",
    },
    ignores: ["**/node_modules/", "./dist"],
    languageOptions: {
      globals: {
        ...globals.node,
        process: "readonly",
      },
    },
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended
);
