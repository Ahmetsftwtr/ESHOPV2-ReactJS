const path = require('path');
module.exports = {
  entry : './src/index.js',
  output:{
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js'
  },
  devServer: { 
    static: path.resolve(__dirname, 'dist'), 
    historyApiFallback: true,
  },
  module: {
    rules: [                     
        {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
        },
        {
          test:/\.scss$/,
          use:['style-loader','css-loader','sass-loader'],
          exclude:/node_modules/
        }
    ]
  },
  mode: 'development'

};