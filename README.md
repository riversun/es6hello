# node.jsでフロントエンド開発

## 概要

node.js+webpack4+babelのひな形となるプロジェクト

- node.jsの環境をつかってフロントエンド開発をする
- ブラウザなど外部から使えるようライブラリを作る
- webpack4をつかってバンドルを作る
- babel v7をつかって、es6記法で書いたjsコードをes5に変換する

## /src
 
**src/index.js**

```javascript
export { default as Greeting }  from './hello.js';
````

**src/hello.js**

```javascript
   /**
    * 挨拶クラス
    * (ECMAScript 6 スタイル)
    * Helloクラスがdefaultのexport対象とする
    */
   export default class Hello {
   
       //コンストラクタ
       constructor() {
       }
   
       /**
        * 挨拶をする
        * @returns {string}
        */
       sayHello() {
           
           const hello = 'Hi, there!';
           console.log(hello);
   
           return hello;
       }
   }
```

## /public

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
</head>
<body>
<script src="js/app.js"></script>
<script>
const greeting = new com.example.Greeting();
alert(greeting.sayHello());
</script>
</body>
</html>

```

## /

**package.json**

```json
{
  "name": "es6hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack --config webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Tom Misawa <riversun.org@gmail.com> (https://github.com/riversun)",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/riversun/es6hello.git"
  },
  "bugs": {
    "url": "https://github.com/riversun/es6hello/issues"
  },
  "homepage": "https://github.com/riversun/es6hello#readme",
  "devDependencies": {
    "@babel/core": "^7.1.5",
    "@babel/preset-env": "^7.1.5",
    "babel-loader": "^8.0.4",
    "webpack": "^4.19.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.8"
  }
}

```

**webpack.config.js**

```javascript
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
        path: path.join(__dirname, "dist"),
        publicPath: "/js/",
        filename: '[name].js',
        library: ["com", "example"],
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "useBuiltIns": "usage",
                                    "targets": "> 0.25%, not dead"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map'

};

```

# 実行する

```shell
npm start
```

# バンドルをビルドする

```shell
npm run build
```