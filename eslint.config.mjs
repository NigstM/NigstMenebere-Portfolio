import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals.js"; // Add .js extension
import nextTypescript from "eslint-config-next/typescript.js"; // Add .js extension

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  nextCoreWebVitals, // Include the Core Web Vitals config
  nextTypescript, // Include the TypeScript config
  {
     rules: {
    'react/no-unescaped-entities': 'off', // Disable this rule
    '@typescript-eslint/no-empty-object-type': 'off', // Disable this rule
  },
  },
];

export default eslintConfig;