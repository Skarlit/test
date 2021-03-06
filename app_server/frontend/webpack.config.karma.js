const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const pathConfig = require("./path_config");
const commonConfig = require("./webpack_common");

/* global __dirname */
/* eslint no-undef: "error" */

module.exports = {
  context: __dirname,
  devtool: "source-map",
  module: {
    loaders: [
      commonConfig.babelLoader(),
      commonConfig.extractTextLoader(),
      {
        test: /\.off(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.styl$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader?name=[hash].[ext]"]
      }
    ]
  }
};
