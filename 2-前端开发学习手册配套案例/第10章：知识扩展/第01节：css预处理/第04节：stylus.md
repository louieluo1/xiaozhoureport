 

# stylus

### 一、安装stylus

``` bash
npm install -g stylus
```

### 二、编译less文件

``` bash
stylus index.styl
```



### 三、语法

``` stylus
$textColor = red;
$bgc = yellow;
.box{
    width:300px;
    height:300px;
    background-color: $bgc;
    .title{
        color:$textColor;
    }
}
```

