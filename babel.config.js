module.exports = {
  presets: [
    'module:metro-react-native-babel-preset', 
  ],
  plugins: [
    ['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src/',
          '@configs': './src/configs',
          '@components': './src/components',
          '@services': './src/services',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
