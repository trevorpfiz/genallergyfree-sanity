module.exports = {
  extends: ['next/core-web-vitals', 'plugin:storybook/recommended', 'airbnb'],
  globals: {
    React: 'readonly',
  },
  rules: {
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-unstable-nested-components': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'arrow-parens': 'off',
    'function-paren-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'no-unused-expressions': 'off',
    camelcase: 'off',
    'react/jsx-indent': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/static-property-placement': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/sort-comp': 'off',
    'react/no-danger': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-autofocus': 'off',

    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-typescript'],
      rules: {
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-redeclare': 'off',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
