module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/strict',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'next',
        'turbo',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'prettier'],
    rules: {
        'no-var': 'error',
        'brace-style': 'error',
        'prefer-template': 'error',
        'space-before-blocks': 'error',
        'import/prefer-default-export': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'react/no-unescaped-entities': 'off',
        'prettier/prettier': [
            'error',
            {
                parser: 'flow',
                singleQuote: true,
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.test.ts', '**/*.test.tsx', '**/*.spec.tsx', '**/*.spec.tsx'],
        },
    ],
};
