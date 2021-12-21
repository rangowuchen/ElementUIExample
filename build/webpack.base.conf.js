/*
 * @Author: wuchen
 * @Date: 2018-08-14 10:39:32
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-21 14:11:40
 * @Description: 
 * @Email: rangowu@163.com
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
// 打包并生成压缩包
const FileManagerPlugin = require('filemanager-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      // {  //从这一段上面是默认的！不用改！下面是没有的需要你手动添加，相当于是编译识别sass!
      //如有此报错,注释掉下面即可 relative module was not found:* ./assets/css/test.scss in ./src/main.js
      //   test: /\.scss$/,
      //   loaders: ["style", "css", "sass"]
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      // worker-loader配置信息
      {
        test: /\.worker\.js$/,//以.worker.js结尾的文件将被worker-loader加载 
        use: { loader: 'worker-loader' }//指定文件的加载器

      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  // 打包并生成压缩包配置
  plugins:[
    new FileManagerPlugin({
      events:{
  　　   onEnd: {
        　　 delete: [
            　　  './dist/mydist.zip',
        　　  ],
        　　 archive: [
          　　   {source: './dist', destination: './dist/mydist.zip'},
          　　]
    　　 }
      }
　　})
  ]
}
