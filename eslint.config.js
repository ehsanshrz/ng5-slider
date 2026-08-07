// @ts-check
const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = defineConfig([
  {
    files: ["src/**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/prefer-on-push-component-change-detection": "off",
      "@angular-eslint/component-selector": "off",
      "@angular-eslint/directive-selector": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-useless-assignment": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "none",
        },
      ],
    },
  },
  {
    files: ["src/**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/prefer-control-flow": "off",
    },
  },
]);
