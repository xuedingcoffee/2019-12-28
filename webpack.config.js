
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
let obj = {
    mode:'development',
    entry:{
        index:'./index.js'
    },
    devServer:{
        hot:true,
        port:8080,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./index.html'),
            filename:'index.html'
        })
    ]

}

module.exports = obj; 