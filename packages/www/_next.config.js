const path = require("path");
//const webpack = require("webpack");
const withTM = require('next-transpile-modules')(['@lib/a','@lib/b']);

module.exports = withTM({
  webpack: (config, options) => {
    console.log('aaaaaa')
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in parent directories
      '@lib/a': path.join(__dirname, "../lib/a/build"),
      '@lib/b': path.join(__dirname, "../lib/b/build"),
    };
    return config;
  }
});
