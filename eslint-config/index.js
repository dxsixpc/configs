// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'import',
    'jest',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'unicorn',
    'sonarjs'
  ],
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2020: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'no-bitwise': 0,
    'no-continue': 0,
    'no-lonely-if': 0,
    'no-multi-assign': 0,
    'no-nested-ternary': 0,
    'no-inner-declarations': 0,
    'no-unused-expressions': 0,
    'max-classes-per-file': 0,
    'prefer-destructuring': 0,
    'class-methods-use-this': 0,
    'implicit-arrow-linebreak': 0,
    'lines-between-class-members': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    'consistent-return': 0,
    'no-return-assign': [2, 'except-parens'],
    'no-param-reassign': [2, { props: false }],
    'no-cond-assign': [2, 'except-parens'],
    'no-console': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    '@typescript-eslint/no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true }
    ],
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'func-names': [1, 'never', { generators: 'as-needed' }],
    'unicorn/filename-case': 0,
    'import/export': 0,
    'import/no-cycle': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-relative-packages': 0,
    'promise/always-return': 0,
    'promise/catch-or-return': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 0,
    camelcase: 0,
    '@typescript-eslint/camelcase': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-useless-constructor': 0,
    '@typescript-eslint/no-useless-constructor': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'no-redeclare': 0,
    '@typescript-eslint/no-redeclare': [2, { ignoreDeclarationMerge: true }],
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'no-useless-concat': 'error',
    'require-await': 'error',
    // ???????????????,???????????????????????????
    'multiline-comment-style': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/consistent-type-imports': 'warn',
    'sonarjs/no-nested-template-literals': 0,
    'sonarjs/prefer-immediate-return': 0,
    'sonarjs/no-small-switch': 0,
    'no-var': 0,
    'prettier/prettier': 0
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'no-console': 0,
        'global-require': 0
      }
    }
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  }
};
