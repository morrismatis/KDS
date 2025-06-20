const path = require('path');

module.exports = {
  entry: './src/FacePlate.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // Add 'type: "javascript/auto"' to ensure ES modules are parsed correctly
        type: "javascript/auto",
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '.'),
    },
    open: true,
    hot: true,
  },
};
