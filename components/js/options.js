var setHeader = new Object();
var setLeftSection = new Object();
var setRightSection = new Object();

/** 设置标题,将显示在顶部标题栏处 */
setHeader.title = 'NekoMimi Demo';

/**
 * 此处设置背景,每个图片之间用逗号隔开
 */
setHeader.background = [
        'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi896lfbj31hc0u079s.jpg',
        'https://ww2.sinaimg.cn/large/0060lm7Tly1fjfivy5o6zj31hc0u0wli.jpg',
        'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfivzadbwj31kw0w0k4s.jpg',
        'https://ww1.sinaimg.cn/large/0060lm7Tly1fjfi88qcdpj31hc0u00xy.jpg',
        'https://ww2.sinaimg.cn/large/0060lm7Tly1fji5691db2j31hc0u0n5v.jpg',
        'https://ww4.sinaimg.cn/large/0060lm7Tly1fji5688e62j31hc0u0wjg.jpg',
        'https://ww4.sinaimg.cn/large/0060lm7Tly1fjfi87rzn0j31hc0u0djp.jpg',
        'https://ws3.sinaimg.cn/large/007giGeVly1fuvsdqd6duj31hc0u0aea.jpg',
        'https://ws2.sinaimg.cn/large/0065BpO8gy1fuhnokeop1j31hc0u0too.jpg',
        'https://ws4.sinaimg.cn/large/007giGeVly1fuvsgpyiplj31hc0u0adj.jpg'
];

/** 设置地址栏图像,大小为16×16,建议采用长宽相等的图片以防止变形 */
setHeader.avatar = 'components/img/avatar.png';

/** 
 *  设置左上角的图片,建议大小:150×150
 *  注意:如果图片比例相差太大可能会造成变形
 */
setLeftSection.icon = './components/img/avatar.png';

/**
 *  可以在这里修改四个链接的名字
 *  然而改作用的功能还没弄出来,改这里差不多等于只是改个显示方式而已
 */
setLeftSection.links = ['Home','Archives','Game','About'];

/** Home 标题 */
setRightSection.homeTitle = 'Yukaric fes';

/**
 *  在这里可以更改 Home 展示页上的链接,默认为6个,内置 Demo 用链接,可随意修改
 *  icon:  显示图标
 *  link:  点击后跳转的网站或网页
 *  value: 显示的名称
 *  图标使用 font-awesome ,如果不知道用哪个图请点击这里:http://fontawesome.dashgame.com/
 */
var setRightSectionHome = [
    {
        icon: 'fa fa-home',
        link: 'https://yukarin.me',
        value: 'Home'
    },{
        icon: 'fa fa-github',
        link: 'https://github.com/Miya-Yukarin',
        value: 'GitHub'
    },{
        icon: 'fa fa-terminal',
        link: 'https://blog.yukarin.me',
        value: 'Blog'
    },{
        icon: 'fa fa-envelope-o',
        link: 'mailto:s@shizu17.pw',
        value: 'E-Mail'
    },{
        icon: 'fa fa-paper-plane-o',
        link: 'https://blog.shizu17.pw/?p=5',
        value: 'SS'
    },{
        icon: 'fa fa-weibo',
        link: '#',
        value: 'Weibo'
    }];

/** 文章页标题 */
setRightSection.archivesTitle = 'Archives';

/**
 *  此处可以设置你喜欢的5~8篇文章
 *  link:  链接
 *  value: 显示文字
 *  date:  日期
 * 
 *  TODO: 动态获取 wordpress/typcho 博客中的最新文章
 */
var setRightSectionArchives = [
    {
        link: 'https://blog.yukarin.me/archives/16.html',
        value: '[萌化项目] 扁平ACG风落地页',
        date: '8102/9/10'
    },{
        link: 'https://blog.yukarin.me/archives/19.html',
        value: 'TY-LandingPage:一个简单的落地导航页',
        date: '8102/9/9'
    },{
        link: 'https://blog.yukarin.me/archives/17.html',
        value: '[魔改项目] 知乎PC网页版夜间模式',
        date: '8102/8/23'
    },{
        link: 'https://blog.yukarin.me/archives/4.html',
        value: '幻想领域1.4.3修复版',
        date: '8102/8/7'
    },{
        link: 'https://github.com/Miya-Yukarin/Ling-lib/tree/master/LandingPage%20v2.0',
        value: '(已停止维护)LandingPage:一个简单的落地导航页项目',
        date: '8102/8/6'
    }];    

/** 游戏页标题 */
setRightSection.gamesTitle = '游戏好友码';

/**
 * 这里可以填写游戏邀请码什么的,因为实在想不出到底要写什么了
 * 此处配置:6项
 * 推荐配置:5~12项
 * 写了12项的肝帝请受我一拜
 */
var setRightSectionGames = [
    {
        name: 'Lovelive(JP)',
        value: '356 427 103'
    },{
        name: '奇迹暖暖(JP)',
        value: '100 680 952'
    },{
        name: 'ゴシックは魔法乙女',
        value: '98p3s2'
    },{
        name: 'バンドリ!(JP)',
        value: '912 16 956'
    },{
        name: 'OSU',
        value: 'Ayase Miya'
    }];



 /** 关于页标题 */
setRightSection.aboutTitle = '关于本页面';

/** 关于页内容,多行请使用<br>标签间隔 */
setRightSection.aboutText = '像是心在圣洁的羽翼之中坠入了明澈而又辽远的海，亦或是遥远不可及的苍穹，那里有无数璀璨的繁星。有人在上方光辉闪耀的地方唱一只琉璃色的歌曲，将纯净清澈的梦引向东方，流星为不归之人陨落，花朵为已逝之人悲伤的开放。我在寂静之中诞生，在寂静之中归去。万物美好，而你，在中央。';

export { setHeader,setLeftSection,setRightSection,setRightSectionHome,setRightSectionArchives,setRightSectionGames }