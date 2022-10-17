#!/bin/bash
echo "hello word"
# 输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
# 判断宝塔WebHook参数是否存在
if [ ! -n "$1" ];
then
echo "param"
echo "End"
exit
fi
#git项目路径
gitPath="/www/wwwroot/$1"
# git 网址
gitHttp="git@gitee.com:wangwen112255/$1.git"
#branch
branch="master"
if [ -n "$2" ]; then
	branch=$2
	else
	branch="master"
fi
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
