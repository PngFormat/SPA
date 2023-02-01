// webpack needs to be explicitly required
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'app-routing.module': './app/app-routing.module.ts',
    'home-component' : './app/components/home/home.component.ts',
    'contact-component' : './app/components/contact/contact.component.ts',
    'auth-component' : './app/components/authorization/auth.component.ts',
    'regis-component' : './app/components/registration/regis.component.ts',
    'about-component' : './app/components/about/about.component.ts'

  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      { test: /\.css$/,  use: ['style-loader','css-loader'] },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  watch: true,
  
};

