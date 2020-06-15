const path=require("path")
const optimize=require("optimize-css-assets-webpack-plugin")
const miniCssExtractPlugin=require("mini-css-extract-plugin")
module.exports={
    optimization:{
        minimizer:[
            new optimize()
        ]
    },
    entry:path.resolve(__dirname,"main.js"),
    output:{
        filename:"bundle.js",
        path:__dirname
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:[miniCssExtractPlugin.loader,"css-loader","postcss-loader"/*css后处理*/]
            }
        ]
    },
    plugins:[new miniCssExtractPlugin({
        filename:"./result.css"
        //你需要的css文件
    }),]
}