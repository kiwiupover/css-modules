'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    cssModules: {
      extension: 'module.scss',
      intermediateOutputPath: 'addon.scss',
      postcssOptions: {
        syntax: require('postcss-scss')
      },
      // generateScopedName: function(className, modulePath) {
      //   return '_sass_addon' + generateScopedName(className, modulePath);
      // }
    }
  }
};
