// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: './src/index.js',
  resolve: {
    fallback: {
      // "path": require.resolve("path-browserify"),
        "fs": false
    },
},
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      publicPath: '/dist/',
    },
    port: 8080,
    proxy: {
      '/routes': 'localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },

      {   
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // First we transform SASS to standard CSS
            //move above css and  
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },

      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",

            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: 'images'
            }
          }
        ]
      }

    ]
  },
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development

  //process.env.NODE_ENV for mode
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new NodePolyfillPlugin()]
};