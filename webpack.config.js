const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
      index:'./src/index.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    module:{
          rules:[
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {test:/\.vue$/,loader:"vue-loader"},
            {test:/\.(jpg|png|jpeg|gif)$/,loader:"url-loader"}
          ]
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery',
      'window.jQuery': 'jquery'
      })
    ]
};
