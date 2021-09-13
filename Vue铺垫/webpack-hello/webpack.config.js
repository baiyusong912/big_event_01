const path = require("path")
    // 引入把css单独抽离插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 引入自动生成 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

// console.log('项目根目录：', __dirname)
// 对外导出webpack配置=》执行npm run build=>可以读取这个对象的配置进行打包
module.exports = {
    entry: "./src/main.js", // 入口
    // 出口
    output: {
        path: path.join(__dirname, "build"), // 出口路径
        filename: "js/bundle.js" // 出口文件名和目录
    },
    // 插件： 增强webpack功能
    plugins: [
        // 指定打包的html模板文件，打包成功后=》自动把打包的js文件引入到指定的html中
        new MiniCssExtractPlugin({
            filename: "css/common.css"
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' // 以此为基准生成打包后html文件
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    // 加载器：让webpack支持打包更多格式的文件（因为webpack默认只能打包.js和.json文件）
    module: {
        rules: [ // loader的规则
            // 支持打包.css样式
            {
                test: /\.css$/, // 匹配所有的css文件
                // use数组里从右向左运行
                // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
                // 再用 style-loader 将样式, 把css插入到dom中
                // use: ["style-loader", "css-loader"]
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" }
                ]
            },
            // 支持打包less
            {
                test: /\.less$/,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                // use: ["style-loader", "css-loader", 'less-loader']
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            // 支持打包各种格式的图片
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [{
                    loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
                    // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
                    options: {
                        // 配置是否打包成base64格式：大于8K复制图片到打包目录；小于8K打成base64格式
                        // 为什么这么做？
                        /**
                         * 1. 小文件图片适合打包成b64格式，较少一个图片的http请求
                         * 2. 大文件打包成b64的话，会无形中增加js文件体积，拖慢网页下载渲染
                         */
                        limit: 8 * 1024,
                    },
                }, ],
            },
            { // 处理字体图标的解析
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 2 * 1024,
                        // 配置输出的文件名
                        name: '[name].[ext]',
                        // 配置输出的文件目录
                        outputPath: "fonts/"
                    }
                }]
            },
            // 把es678高级语法转换成兼容性更好的es5语法
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}