// connection alias

const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@app': path.resolve(__dirname, 'src/app'),
    '@entities': path.resolve(__dirname, 'src/entities'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@shared': path.resolve(__dirname, 'src/shared'),
  };
  return config;
};