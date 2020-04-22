const merge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //分离生产环境下的css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩并合并css
const commonConfig = require("./webpack.common");
const prodConfig = {
    mode: "production", //production生产环境（上线的代码）
    devtool: 'cheap-module-source-map', //source-map会生成xxx.js.map的文件，inline-source-map则会将xxx.js.map的文件放进xxx.js中，cheap-source-map 没有列映射(column mapping)的 source map，忽略 loader source map。
    //开发环境最好的是使用cheap-module-eval-source-map，生产环境最好使用cheap-module-source-map
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader'] //loader的执行顺序是从后向前
        }, {
            test: /\.scss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader', 'postcss-loader', 'sass-loader']
        }, ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },



}
module.exports = merge(commonConfig, prodConfig);