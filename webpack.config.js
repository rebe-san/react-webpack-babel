const HotModuleReplacementPlugin = require('react-hot-loader');
const HtmlWebPackPlugin=require('html-webpack-plugin')
 
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [{loader:'style-loader'}, {loader:'css-loader'}]
      }
     
    ]
  },
 
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({template:'./src/index.html'})
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};

