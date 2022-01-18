# Blog
- git config -l
- git congif --global user.name ""
- git config --global user.email ""
- ssh-keygen -t rsa -C生成本地密匙，将公匙配置好
- gitignore配置信息可以设置需要忽略的文件
- git init直接本地初始化一个仓库，不过远程push的话需要配置remote
- git clone直接复制，到时候提交远程的话就是这个
- git status查看当前文件的状态
- git commit -m 注释提交到本地仓库
- git remote add <name> <url>配置远程端口，找到指定的仓库位置
- git branch列出本地分支
  git branch -r查看远程分支
  git branch [branch-name]创建一个分支
  git init方式建立本地仓库的话，需要github上的远程仓库不要有初始化的的readme或者gitignore要不会提示没有本地仓库
  git clone的话push的话可以直接