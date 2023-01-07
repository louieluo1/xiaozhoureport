# less

### 一、安装less

``` bash
npm install -g less
```

### 二、编译less文件

``` bash
lessc index.less index.css
```



### 三、语法

``` less
@textColor:red;
@bgc:yellow;
.box{
    width:200px;
    height:200px;
    background-color: @bgc;
    .title{
        color:@textColor;
    }
}
```

