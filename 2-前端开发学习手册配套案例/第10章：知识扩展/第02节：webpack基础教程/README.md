# webpack

[文档地址](https://www.webpackjs.com/guides/)

### 一、安装

``` bash
npm install -g webpack
npm install -g webpack-cli
```

### 二、目录结构

```diff
  webpack-demo
  |- webpack.config.js
  |- index.html
  |- index.js  
  |- sum.js
```

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./dist/buddle.js"></script>
</body>
</html>
```

``` js
import sum from "./sum"
let result = sum(10,20)
console.log(result)
```

``` js
export default function(a,b){
    return a + b;
}
```



### 二、配置文件

``` js
module.exports = {
    entry:"./index.js",
    output:{
        filename:"buddle.js"
    }
}
```

### 三、打包

在项目目录中执行webpack命令

``` bash
webpack
```

将入口文件设置为entry.js打包后在dist目录中生成buddle.js文件。
```diff
  webpack-demo
  |- webpack.config.js
  |- index.html
+ |- /dist
+   |- buddle.js
  |- index.js  
  |- sum.js
```

### 四、完善目录结构

初始化项目，创建package.json文件

``` bash
npm init
```

设置package.json的scripts属性

``` diff
    {
      "name": "test",
      "version": "1.0.0",
      "description": "",
      "main": "entry.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1" ,
+       "build":"webpack"
      },
      "author": "",
      "license": "ISC"
    }

```

创建src目录，将js源文件都放入此目录中
```diff
  webpack-demo
  |- webpack.config.js
  |- package.json
  |- index.html
  |- /src
     |- index.js  
     |- sum.js
  |- /dist
    |- index.html
 
```

这样，一个最简单的webpack项目就创建好了。

### 五、加载css

```bash
npm install --save-dev style-loader css-loader
```

**webpack.config.js**

```diff
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
  };
```

### 六、加载scss

``` bash
npm install sass-loader sass --save-dev
```

```diff
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
+       {
+           test: /\.s[ac]ss$/i,
+           use: [
+             'style-loader',
+              'css-loader',
+              'sass-loader',
+           ],
+        }
      ]
    }
  };
```

