module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: 2021, sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    env: {
        browser: true,
        es2021: true,
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
};
