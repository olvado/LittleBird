/**
 * @see http://webpack.github.io/docs/configuration.html
 * for webpack configuration options
 */
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'littlebird.js'),
  output: {
    filename: 'littlebird.js',
    path: path.join(__dirname, 'lib')
  },

  // The 'module' and 'loaders' options tell webpack to use loaders.
  // @see http://webpack.github.io/docs/using-loaders.html
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      include: path.join(__dirname, 'src')
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?stage=0'],
      include: path.join(__dirname, 'src')
    }]
  }
};