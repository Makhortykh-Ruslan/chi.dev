import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import security from 'eslint-plugin-security';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from './prettier.config.js';

export default tseslint.config(
    {
        ignores: [
            '.next',
            'dist',
            'build',
            'coverage',
            'node_modules',

            'eslint.config.*',
            'prettier.config.*',
            'postcss.config.*',
            'tailwind.config.*',
            '*.config.js',
            '*.config.mjs',
        ],
    },

    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    next.configs['core-web-vitals'],

    {
        files: ['**/*.{ts,tsx}'],

        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
            },
            globals: {
                ...globals.browser,
            },
        },

        plugins: {
            prettier: eslintPluginPrettier,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            import: eslintPluginImport,
            'simple-import-sort': eslintPluginSimpleImportSort,
            'unused-imports': eslintPluginUnusedImports,
            'jsx-a11y': jsxA11y,
            security,
        },

        rules: {
            'prettier/prettier': ['error', prettierConfig],

            ...reactHooks.configs.recommended.rules,
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-vars': 'error',

            '@next/next/no-img-element': 'warn',
            '@next/next/no-html-link-for-pages': 'off',

            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'off',

            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            'no-console': ['error', { allow: ['warn', 'error'] }],
            curly: 'error',
            eqeqeq: ['error', 'smart'],
            'no-debugger': 'error',
            'no-unreachable': 'error',
            'prefer-const': 'error',

            'max-len': ['error', { code: 100 }],

            'import/no-unresolved': 'off',
            'import/no-duplicates': 'error',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    },

    {
        files: ['**/*.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
        },
    },
    {
        files: ['**/*.tsx'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    }
);