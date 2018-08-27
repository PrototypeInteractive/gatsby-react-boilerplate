"use strict";

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  var svgFiles = /\.icon$/;
  var svgLoader = `svg-sprite-loader`;

  switch (stage) {
    case `develop`:
    case `develop-html`:
    case `build-html`:
    case `build-javascript`: {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: svgFiles,
              use: [`svg-sprite-loader`]
            }
          ]
        }
      });
    }
    default: {
      return;
    }
  }
};
