// Next.js 官方推薦的最小設定
// 會自動套用 eslint-config-next 中針對 Server/Client Component 的特殊規則。
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    // 自訂規則：更早發現問題
    "react/react-in-jsx-scope": "off", // Next.js 不需要引入 React
    "react/jsx-uses-react": "off",
    "react/jsx-key": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
