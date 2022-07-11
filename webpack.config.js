const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: 'bundle.js',
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
        ],
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      parallel: true,
      extractComments: false,
    })],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new ESLintPlugin({
      context: './src',
      files: ['**/*.js'],
      failOnError: false,
    }),
    new ExtractCssChunks({
      filename: '[name].css',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
};
