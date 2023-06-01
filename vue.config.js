// vue.config.js
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [

                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/, //匹配文件名
                        threshold: 10240, //对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    })
                ]
            }
        }

    },
    devServer: {
        host: '0.0.0.0',
        port: '8080',
        // https:false,
        open: true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: { //配置跨域
            '/': {
                target: 'http://123.57.85.69:3001/',
                ws: false,
                changeOrigin: true, //允许跨域
                pathRewrite: {
                    '^/': '' //请求的时候使用这个api就可以
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    // baseUrl: process.env.NODE_ENV === 'production' ?
    //     '/vue-share-blog/dist/' :
    //     '/',
    publicPath: process.env.NODE_ENV === 'production' ?
        '/' : '/',
}