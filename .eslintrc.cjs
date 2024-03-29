module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'simple-import-sort', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'no-unused-vars': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
          '@': './src',
        },
      },
      typescript: {
        alwaysTryTypes: true,
        paths: ['src'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
