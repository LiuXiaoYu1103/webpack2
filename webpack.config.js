const path = require('path')
const webpack = require('webpack')
// 在内存中生成html页面的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口文件
  entry : path.join(__dirname, './src/main.js'),
  // 打包的位置和文件名字
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // webpack-dev-server 修改代码后自动更新webpack也可以放在package.json script中
  devServer: {
    // contentBase: 'src',  //置顶托管的根目录
    open: true,  // 自动打开浏览器
    port: 7788,  // 端口号
    hot: true,  // 更新
    hotOnly: true
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }
  },
  plugins: [
    // 热更新的模块对象
    new webpack.HotModuleReplacementPlugin(),
    // 创建在内存中生成的html  参数指定模板页面根据模板页面生成内存中的html
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // placeholders占位符
            name: '[name].[hash:7].[ext]',
            outputPath: './dist/images/',
            limit: 10
          }
        }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      { test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}