const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    
    entry: {
      main: ['./index.jsx'],
    }, 

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },

    resolve: {
        extensions: ['.js', '.json', '.css', '.jsx'],
    },

    devServer: {
        port: 4200,
        historyApiFallback: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html', 
        }),

        new MiniCssExtractPlugin({
          filename: '[name].[hash].css',
        }),

        new CleanWebpackPlugin(),

    ],

    module: {
        rules: [
          {
            test: /\.css$/, 
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          },
          {
            test: /\.(jpg|png|gif)$/,
            use: ['file-loader']
          },
          {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: [
                    '@babel/plugin-proposal-class-properties'
                  ]
                },
              },
            ]
          },
          {
            test: /\.m?jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ]
              },
            },
          },
        ]
      }
}