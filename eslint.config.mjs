import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
    // ...compat.plugins("prettier-plugin-tailwindcss"),
    ...compat.config({
        ignorePatterns: ["dist/*", ".cache", "public", "node_modules", "*.esm.js"],
    })
];

export default eslintConfig;
