module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      'react-native-reanimated/plugin',
    ]
  };
};
