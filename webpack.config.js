const webpack = require('webpack');
const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, 'client');

const config = {
  context: CLIENT_DIR,
  entry: [
    'babel-polyfill',
    './index.jsx'
  ],
  output: {
    path: __dirname+'/cordova/www',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  watch:true,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      plugins: ['transform-runtime']
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.svg$/,
      loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
    },{
      test: /\.(png|mp3|ogg|woff)$/,
      loader: 'file?name=[path][name].[ext]'
    }
    ]
  },
  devtool: "eval",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
};

module.exports = config;