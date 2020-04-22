const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); //clean-webpack-plugin的版本是3.0以上需要解构

module.exports = {
    entry: { //这是两个入口文件的状态，分别取名
        main: './src/index.js',
        index2: './src/index2.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./../dist")
    },
    module: {
        rules: [
            // {
            //     test:/\.png$/,
            //     use:{
            //         loader:'file-loader'
            //     }
            // },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: { //这是与file-loader的区别
                        outputPath: 'image/', //把打包图片输出到文件夹下
                        name: '[name]+[hash].[ext]', //重命名
                        limit: 20480 //在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
                    }
                }
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/, //忽略node_modules里的文件
                use:[
                    "babel-loader",
                    "eslint-loader"
                ],
                //loader: "babel-loader",
                // options: {


                //     "plugins": [
                //         [
                //             "@babel/plugin-transform-runtime",
                //             {
                //                 "absoluteRuntime": false,
                //                 "corejs": 3, //false 2 3
                //                 "helpers": true,
                //                 "regenerator": true,
                //                 "useESModules": false,
                //                 "version": "7.0.0-beta.0"
                //             }
                //         ]
                //     ]
                // }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //htmlwebpackplugin会在打包完成后自动生成html文件，并把打包完成的文件自动引入到这个html文件
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),

    ],
    resolve:{
        extensions:['.js','.jsx']
    }
}