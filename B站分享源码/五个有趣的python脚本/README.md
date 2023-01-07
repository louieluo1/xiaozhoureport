# 说明

### 一、安装pandoc

第一个例子将md转换成word需要安装pandoc。

安装包在当前目录中可以找到。

#### 二、安装依赖

每个实例都需要安装依赖才能正常运行

安装说明

``` bash
# 在cmd中执行
pip install <依赖名称>
```

#### 三、使用国内镜像

使用pip下载镜像默认到国外服务器下载，速度会比较慢

可以使用国内镜像，配置方式如下

``` bash
# 打开cmd
# 先升级pip
pip install pip -U
# 将清华大学源地址设为默认
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```



#### 四、获取CPU温度需要安装c++编译器

可以直接到微软官网下载即可

`https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/`

弹出的界面选择c++，然后安装即可。

（安装程序将近2G，要不是特别喜欢这个脚本，不安也罢doge）

还有，此脚本需要使用Python版本3.0.0 - 3.4.0。

除了这个案例，其他案例我yog的python-3.10.5



祝您玩的愉快，别忘了给晓舟一键三连。

