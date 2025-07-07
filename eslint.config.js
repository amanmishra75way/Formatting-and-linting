import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    languageOptions: {
      globals: {
        ...globals.node, // For Node.js environment
        ...globals.browser, // If you use browser globals too
      },
    },
    extends: [
      "plugin:prettier/recommended", // <- this uses prettier config and adds prettier/prettier rule
      "js/recommended",
      prettier, // <- disables conflicting ESLint formatting rules
    ],
    rules: {
      "prettier/prettier": "error", // Show formatting issues as ESLint errors
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
]);
