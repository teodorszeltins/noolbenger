module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: ["/node_modules", "/lib"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
  },
};
