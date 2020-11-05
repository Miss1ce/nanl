const webpack = require("webpack");
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
  //编译输出路径
  outputDir: 'dist',
  //publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: './',
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
     //open: process.platform === 'darwin',
     host: '0.0.0.0',
     port: 8181,
  },
    //swiper  转es5 @see https://www.jb51.net/article/147140.htm
    transpileDependencies: [
        "swiper",
        "dom7",
        "ssr-window"
    ],
    // 全局引用jquery 
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
    css: {
        loaderOptions: {
          postcss: {
            plugins: [
              autoprefixer({
                browsersList: ['Android >= 4.0', 'iOS >= 10']
              }),
              pxtorem({
                rootValue: 75,
                propList: ['*'],
              })
            ]
          },
          less: {
            modifyVars: {
              blue:'#03a9f4'
            }
          }
        }
      },
};
