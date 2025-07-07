import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node, // Since it's a Node.js project
    },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
      "no-console": ["warn", { allow: ["warn", "error"] }], // or "error" instead of "warn"
    },
  },
]);
