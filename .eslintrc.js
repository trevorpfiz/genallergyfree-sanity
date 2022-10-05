module.exports = {
  extends: ['next/core-web-vitals', 'plugin:storybook/recommended', 'mantine'],
  globals: {
    React: 'readonly',
  },
  rules: {
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
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
