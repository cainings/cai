// const px2rem = require('postcss-px2rem')

// const postcss = px2rem({
//   remUnit: 16   //基准大小 baseSize，需要和rem.js中相同
// })
module.exports = {
    // css: {
    //     loaderOptions: {
    //       postcss: {
    //         plugins: [
    //           postcss
    //         ]
    //       }
    //     }
    //   },
    publicPath:'./',
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    devServer: {
        proxy: {
            '/api': {
                // 此处的写法，目的是为了将 /api 替换成 https://www.baidu.com/    
                target: 'https://jsonplaceholder.typicode.com',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    publicPath:'./',
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'components':'@/components',
                'views':'@/views'
            }
        }
    }
}
