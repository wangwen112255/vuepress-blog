# 基于vuepress-theme-vdoing搭建的博客系统

<p>
    <a href="https://github.com/wangwen112255/blog/blob/master/LICENSE"><img src="https://img.shields.io/github/license/Chubby-Duner/blog
" alt="License"></a>
    <a href="https://www.npmjs.com/package/vuepress-theme-vdoing"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-theme-vdoing"></a>
</p>

当前博客是基于[vuepress-theme-vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing)上进行的一个更改，是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。学习与分享前端知识，一起学习，一起成长叭。

## 本地文档预览
```
npm run dev
```

## 文档生成
```
npm run build
```

## 许可证
[MIT](https://github.com/wangwen112255/blog/blob/master/LICENSE)

Copyright (c) 2021-present Amerys


##  webhook

```shell
echo "代码拉取"
# 输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
# 判断宝塔WebHook参数是否存在,需要用到param参数的话可以开启此判断，否则可注释
if [ ! -n "$1" ];
 then 
           echo "param参数错误"
           echo "End"
           exit
 fi
# git项目路径, $1为webhook请求链接param的值，也可写死，这样请求的param可以whatever
gitPath="/www/wwwroot/$1"
# git 网址, $1为webhook请求链接param的值，也可写死，这样请求的param可以whatever
gitHttp="git@gitee.com:wangwen112255/$1.git"
 
echo "Web站点路径：$gitPath"
 
# 判断项目路径是否存在
if [ -d "$gitPath" ]; then
        cd $gitPath
        # 判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                git clone $gitHttp gittemp
                mv gittemp/.git .
                rm -rf gittemp
        fi
        # 拉取最新的项目文件
        git reset --hard origin/master
        
        echo "开始拉取代码"
        #pull命令记得加sudo
        sudo git pull origin master
        echo "拉取完成"
        
        #按需开启npm 安装和部署命令
        #npm install
        npm run build
        echo "部署完成"
        # 设置目录权限
        sudo chown -R www:www $gitPath
        echo "End"
        exit
else
        echo "该项目路径不存在"
        echo "End"
        exit
fi

```





