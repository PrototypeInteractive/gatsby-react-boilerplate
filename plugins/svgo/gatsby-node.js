"use strict";

exports.modifyWebpackConfig = function (_ref, options) {
  var config = _ref.config, stage = _ref.stage;

  var svgFiles = /\.icon$/;
  var svgLoader = `svg-sprite-loader`;

  switch (stage) {
    case `develop`:
      {
        config.loader(`svg-sprite`, {
          test: svgFiles,
          loaders: [`svg-sprite-loader`]
        });

        return config;
      }
    case `build-css`:
      {
        config.loader(`svg-sprite`, {
          test: svgFiles,
          loaders: [`svg-sprite-loader`]
        });

        return config;
      }
    case `develop-html`:
    case `build-html`:
      {
        config.loader(`svg-sprite`, {
          test: svgFiles,
          loaders: [`svg-sprite-loader`]
        });
        return config;
      }
    case `build-javascript`:
      {
        config.loader(`svg-sprite`, {
          test: svgFiles,
          loaders: [`svg-sprite-loader`]
        });
        return config;
      }
    default:
      {
        return config;
      }
  }
};
