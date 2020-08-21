const path = require("path");

module.exports = {
  webpack: (config, _options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Will make webpack look for these modules in parent directories
      '@lib/a': path.join(__dirname, "../a/build"),
      '@lib/b': path.join(__dirname, "../b/build"),
    };
    return config;
  }
};
