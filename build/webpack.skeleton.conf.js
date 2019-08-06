/*
 * @Author: wuchen
 * @Date: 2019-08-06 15:31:48
 * @LastEditors: wuchen
 * @LastEditTime: 2019-08-06 15:57:43
 * @Description: 骨架屏
 * @Email: rangowu@163.com
 */
'use strict';

const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  entry: {
    app: resolve('../src/entry-skeleton.js')
  },
  output: Object.assign({}, baseWebpackConfig.output, {
    libraryTarget: 'commonjs2'
  }),
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: []
})

