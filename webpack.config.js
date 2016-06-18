 /* global __dirname */

 var path = require('path');

 var webpack = require('webpack');
 var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

 var dir_js = path.resolve(__dirname, 'src');
 var dir_build = path.resolve(__dirname, 'dest');

 module.exports = {
   entry: path.resolve(dir_js, 'app.js'),
   output: {
     path: dir_build,
     filename: 'bundle.js'
   },
   devServer: {
     contentBase: dir_build,
   },
   module: {
     loaders: [
       {
         loader: 'react-hot',
         test: dir_js,
       },
       {
         loader: 'babel-loader',
         test: dir_js,
         query: {
           presets: ['es2015', 'react'],
         },
       },
       {
         test: /\.scss$/,
         loaders: ["style", "raw", "sass"]
       }
    ]
   },
   resolve: {
     extensions: ['', '.js', '.jsx', '.json']
   },
   plugins: [
     new BrowserSyncPlugin({
       host: 'localhost',
       port: 3000,
       server: {
         baseDir: './'
       }
     })
   ],
   stats: {
     // Nice colored output
     colors: true
   },
   // Create Sourcemaps for the bundle
   devtool: 'source-map',
 };
