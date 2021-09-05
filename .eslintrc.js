const {
  defaultOrder,
} = require('@typescript-eslint/eslint-plugin/dist/rules/member-ordering');

module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'sort-destructure-keys'],
  rules: {
    // --- eslint ---
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true, minKeys: 2 }],

    // --- eslint & @typescript-eslint ---
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    // --- @typescript-eslint ---
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: {
          memberTypes: defaultOrder,
          order: 'alphabetically',
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',

    // -- import ---
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],

    // --- react ---
    'react/jsx-sort-props': [
      'error',
      {
        reservedFirst: true,
        shorthandLast: true,
        callbacksLast: true,
      },
    ],
    'react/display-name': 'off',

    // --- others ---
    'sort-destructure-keys/sort-destructure-keys': 'error',
  },
};
