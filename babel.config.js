module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'module:react-native-dotenv',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config.ts',
          disableExtraction: process.env.NODE_ENV === 'development',
          importsWhitelist: ['constants.js', 'colors.js'],
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
    presets: ['babel-preset-expo'],
  };
};
