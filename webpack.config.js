const path = require('path');
const { shouldExclude } = require('tamagui-loader');

const tamaguiOptions = {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  disableExtraction: process.env.NODE_ENV === 'development',
  enableDynamicEvaluation: false,
  importsWhitelist: ['constants.js', 'colors.js'],
  logTimings: true,
};

const projectRoot = path.resolve();

module.exports = {
  module: {
    rules: [
      {
        exclude: (path) => shouldExclude(path, projectRoot, tamaguiOptions),
        test: /\.[jt]sx?$/,
        use: [
          'thread-loader',
          {
            loader: 'esbuild-loader',
          },
          {
            loader: 'tamagui-loader',
            options: tamaguiOptions,
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': require.resolve('react-native-web'),
      'react-native-svg': require.resolve('@tamagui/react-native-svg'),
    },
  },
};
