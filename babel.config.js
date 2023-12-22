module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      'module:react-native-dotenv',
      'expo-router/babel',
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
    ],
    presets: ['babel-preset-expo'],
  };
};
