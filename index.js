'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    cssModules: {
      // Emit a combined SCSS file for ember-cli-sass to compile
      intermediateOutputPath: 'addon/styles/addon.scss',

      // Use .scss as the extension for CSS modules instead of the default .css
      extension: 'scss',

      // Pass a custom parser/stringifyer through to PostCSS for processing modules
      postcssOptions: {
        syntax: require('postcss-scss')
      }
    }
  }
};
