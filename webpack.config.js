const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entrada principal de tu proyecto React
  output: {
    path: path.resolve(__dirname, 'build'),  // Carpeta de salida
    filename: 'bundle.js',  // Nombre del archivo generado
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Solo archivos .js
        exclude: /node_modules/,  // Excluir la carpeta node_modules
        use: {
          loader: 'babel-loader',  // Usar Babel para convertir el código
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Configuración de Babel para React
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Plantilla HTML que se usará
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3002,  // Puerto en el que se ejecutará el servidor de desarrollo
  },
};
