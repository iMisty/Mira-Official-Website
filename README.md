# Nekomimi

![npm v6.0.0](https://img.shields.io/badge/NPM-6.0.0-blue.svg) ![IE](https://img.shields.io/badge/IE-10%2B-ff69b4.svg) ![Chrome](https://img.shields.io/badge/Chrome-29%2B-brightgreen.svg) ![Android](https://img.shields.io/badge/Android-4.4%2B-brightgreen.svg) ![iOS](https://img.shields.io/badge/iOS-9.2%2B-brightgreen.svg)

## 说明

这是你没有挽过的船新版本……那是不可能的

这个项目名字叫 `Nekomimi` ，翻译过来就是猫耳的意思，然而默认的几张背景图里一张猫耳娘都没，可以说是非常不切实际了

总之呢，这个项目是一个月前的坑，近日才想起来应该好好填掉了

由于使用了 npm ，所以想使用的话，请先点击下面的 Demo 链接访问下，然后再决定是否下载部署

Demo 地址：[https://Miya-Yukarin.github.io/Nekomimi/]

## 功能

### 首页

6个可自定义社交按钮

### 文章页

自定义设置你喜欢的4~8篇文章

### 游戏页

可以自定义自己玩的4~12个游戏（邀请码哇 ID 求好友哇之类的）

### 关于页

自己写点什么吧

### 一言

底端一言区，文字来自hitokoto

### 背景

可自定义随机变换1080P壁纸，全网 CDN 加速

## 部署方法

1. 请先确认计算机内已安装 `Node.js` 与 `npm` 

2. 在 GitHub 中 `Clone` 这个项目，或 `Download Zip` 这个项目.或直接在终端中：
> git clone https://github.com/Miya-Yukarin/Nekomimi.git 

>cd nekomimi

3. 在终端中，定位到项目根目录，输入以下命令安装所需的依赖

> npm install

4. 若需修改内部内容，请使用文本编辑器或 IDE 打开 `components/js/option.js` ，根据注释修改内容

5. 修改完毕后使用以下命令打包

> npm start

注：在本地服务器启动的情况下，所有修改都会重新部署并自动刷新浏览器

6. 如果想将本项目放置到服务器中，请在本地部署完毕后，将 `index.html` 与 `app.js` 两个文件放置到你的服务器或虚拟主机中，即可使用个人域名来访问

## 更新日志
### v1.3.0

- 大幅度调整文件存放地点,`assets` → `components`

- 整合本地 CSS 与 JS 资源,并采用压缩 JS 的方式 ~~不然 200K 的文件 + 额外的两个库还真受不了~~

### v1.2.2

- 将 font-awesome 与 animate.css 的 CDN 库更新为七牛云(可自行更改为 BootCDN )

### v1.2.0

- 修改 `options.js` 里的部分位置,使其更加人性化

- 精简项目结构以及调整资源存储位置

### v1.1.2

- 修改标题及地址栏处自定义 avatar 不生效问题

- 修改加载各组件时显示的部分内容

### v1.1.0

- 增加对移动端适配 ~~为啥连这个都要写,明明现在响应式是主流吧~~

## 许可

MIT License
