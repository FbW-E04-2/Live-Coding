const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins:[
      new HtmlWebPackPlugin({
          template:"./src/index.html",
          filename:"index.html"
      })
  ],
  module:{
    rules: [
        {
          test: /\.css$/,
          use: [
            // [style-loader](/loaders/style-loader)
            { loader: 'style-loader' },
            // [css-loader](/loaders/css-loader)
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            // [sass-loader](/loaders/sass-loader)
            /* { loader: 'sass-loader' } */
          ]
        }
      ]
  }
};