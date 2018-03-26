const path = require('path');

module.exports = {
  mode: 'development',
  entry: [ './script/Popstar.es6'],
  output: {
    filename: 'Popstar.js',
    path: path.resolve(__dirname, 'script')
  },
  module: {    
    rules: [{    
        test: /\.es6$/,    
        exclude: /node_modules/,    
        loader: 'babel-loader'    
    }]    
}    
};