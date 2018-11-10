const path = require("path");

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        port: 8080,
    },
    entry: {app: './src/index.js'},
    output: {
        publicPath: "/js/",
        filename: '[name].js',
        library: ["com", "example"],
        libraryTarget: 'umd'
    },
    //devtool: 'inline-source-map',//ブラウザでのデバッグ用にソースマップを出力する
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
