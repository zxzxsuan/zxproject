const webpack = require('webpack');
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common");
const devConfig = {
    mode: "development", //production生产环境（上线的代码）
    devtool: 'cheap-module-eval-source-map', //source-map会生成xxx.js.map的文件，inline-source-map则会将xxx.js.map的文件放进xxx.js中，cheap-source-map 没有列映射(column mapping)的 source map，忽略 loader source map。
    //开发环境最好的是使用cheap-module-eval-source-map，生产环境最好使用cheap-module-source-map

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] //loader的执行顺序是从后向前
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, ]

    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(), //模块热更新：当模块样式发生改变时，页面不需要重新加载
    ],
    devServer: {
        //"overlay":true,
        contentBase: './dist',
        open: true,
        hot: true,
        // hotOnly:true
        // proxy: {
        //     "/api": "http://localhost:3000"
        //   }
    }
}
module.exports = merge(commonConfig, devConfig)