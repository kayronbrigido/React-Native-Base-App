module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['react', 'react-hooks', 'import', 'unused-imports', '@react-native'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unused-imports/recommended',
    '@react-native',
  ],
  rules: {
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
    'react/jsx-props-no-spreading': 'off',
    'import/order': ['error', {'newlines-between': 'always-and-inside-groups'}],
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
    quotes: ['error', 'single', {avoidEscape: true}],
  },
};
