const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PugPlugin = require('pug-plugin');
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

const dirApp = path.join(__dirname, 'src');
const dirStyles = path.join(__dirname, 'styles');
const dirNode = 'node_modules';

module.exports = {
  entry: {
    'index': path.join(dirApp, 'index.pug'),
    'main': ["@babel/polyfill", path.join(dirApp, 'index.js')],
    'styles': path.join(dirStyles, 'index.scss')
  },
  target: "web",
  resolve: {
    modules: [
      dirApp,
      dirStyles,
      dirNode
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT: true
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new PugPlugin(),
    new RemoveEmptyScriptsPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },

      {
        test: /\.pug$/,
        use: [
          { loader: PugPlugin.loader }
        ],
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
  output: {
    publicPath: path.resolve(__dirname, 'public'),
    publicPath: '/',
  }
}
