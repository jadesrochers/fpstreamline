const path = require('path');

// Production mode automatically sets usedExports: true
// This config just sets a bundle type (umd)
// and makes sure everything gets run through babel loader.
// Does not need CSS loader because the library has no CSS.
// NODE and BROWSER:
// When you want a library to work in both node and the browser, 
// make sure globalObject is set to 'this'.
// If that doesn't work, set it to 'typeof self !== \'undefined\' ? self : this'
const config = {
  entry: './src/index.js',

  mode: 'production',

  optimization: {
    usedExports: true,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    library: '@jadesrochers/fpstreamline',
    filename: 'bundle.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },

}

module.exports = config;
