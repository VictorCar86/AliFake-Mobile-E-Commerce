const path = require('path');
const Dotenv = require("dotenv-webpack");
const { rspack } = require('@rspack/core');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          },
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ]
      },
      {
        test: /\.(gif|png|webp|pdf|mp4|jpe?g)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext]"
        }
      },
      {
        test: /.(css|sass|scss)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ]
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new Dotenv({
      path: "./.env",
      systemvars: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    historyApiFallback: true,
    compress: true,
    port: 3005
  }
};