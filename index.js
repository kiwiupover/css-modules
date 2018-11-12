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
      generateScopedName(className, modulePath) {
        let d = `_sass_addon-${className}-${modulePath}`;
        console.log('generateScopedName', d);
        return d;
      }
    }
  }
};
