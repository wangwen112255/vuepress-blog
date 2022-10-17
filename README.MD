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

#!/bin/bash
echo ""
# 输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
# 判断宝塔WebHook参数是否存在
if [ ! -n "$1" ];
then
echo "param参数错误"
echo "End"
exit
fi
#git项目路径
gitPath="/www/wwwroot/$1"
# git 网址
gitHttp="git@gitee.com:wangwen112255/$1.git"
#branch
branch="master"
#执行脚本
buildScript="build.sh"
echo "Web站点路径：$gitPath"

# 判断项目路径是否存在
if [ -d "$gitPath" ]; then
cd $gitPath
# 判断是否存在git目录
if [ ! -d ".git" ]; then
echo "在该目录下克隆 git"
git clone -b $branch $gitHttp gittemp
mv gittemp/.git .
rm -rf gittemp
fi
# 拉取最新的项目文件
echo "开始拉取代码"
git reset --hard $branch
git pull origin $branch
echo "拉取完成"
# 设置目录权限
if [ -f "$buildScript" ]; then
	chmod +x $buildScript
  ./$buildScript >script.txt
	else
	echo "不存在执行脚本";
fi  
#按需开启npm 安装和部署命令
#npm install
#npm run build
echo "部署完成"
#设置目录权限
chown -R www:www $gitPath
echo "End"
exit
else
echo "该项目路径不存在"
echo "End"
exit
fi

```

##  重要问题:宝塔进行hook打包操作是失效时候，添加软连接即可/sudo运行npm/node出现找不到命令情况

突然想起一句话，凡事有果必有因，于是乎开始回忆整个安装过程，下载tar包，解压tar包，这一切都是在普通用户下进行的，宝塔的软件是在普通用户下进行的，所以/usr/bin目录下并没有npm/node的启动文件，所以很好解决，将启动文件软链接到/usr/bin下面就好
### 解决方案
webhook操作/usr/bin目录下并没有npm/node的启动文件，所以很好解决，将启动文件软链接到/usr/bin下面就好了
```shell
sudo ln -s /www/server/nvm/versions/node/v16.17.1/bin/node
 /usr/bin/node
sudo ln -s /www/server/nvm/versions/node/v16.17.1/bin/npm /usr/bin/npm
```
## 123  




