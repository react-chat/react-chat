const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, 'public');
const BUILD_DIR = path.resolve(__dirname, 'public/dist');

module.exports = {
  entry: [path.resolve(SRC_DIR, 'src/index.jsx'), path.resolve(SRC_DIR,'styles/scss/main.scss')],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          {fallback: 'style-loader', use: ['css-loader', 'sass-loader']}
        )
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: ['public/styles/scss']
        }
      }
    }),
    new ExtractTextPlugin({filename: '[name].bundle.css', allChunks: true})
  ]
};
