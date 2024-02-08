module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // outras configurações de regras aqui
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        '@typescript-eslint/no-unused-vars': 'error'
    }
    // outras configurações aqui
};
