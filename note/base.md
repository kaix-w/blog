### 适应移动端
这里原来是用了那个插件，lib-flexible插件，github作者说建议直接用viewport
图片占位
看了关于viewport的相关文章，主要要理解一下
- 设备像素(device pixels)也叫物理像素：显示器的真实像素，这个和我们常说的分辨率有关，分辨率描述的就是这个显示器的宽和高分别是多少个像素
- 设备独立像素(device independent pixels)：是操作系统定义的一种像素单位，为了避免不同设备物理像素不同导致的展示效果有差，同样物理像素的内容2560\*1440分辨率看着刚好的内容，到了1280*720的设备上就回变的大一倍，不同设备会控制这个比例，
- 设备像素比devicePixelRatio=相同长度设备像素的数量/css像素的数量
- viewport表示浏览器的可视区域：layout viewport、visul viewport 、ideal viewport
- layout viewport就是说整个布局的视口，有时候会出现滚动条，这时候显示的是视觉窗口(visual viewport),但是全部布局已经加载出来了不会变
- ideal viewport是理想视口，不同设备有不同的理想视口
- vw视口宽度：1vw是window.innerWidth的1%,window.innerWidth是当前展示的宽度
- vh视口高度：1vh是window.innerHeight的1%
- vmin：vmin 的值是当前 vw 和 vh 中较小的值；
- vmax：vmax 的值是当前 vw 和 vh 中较大的值

使用方法：通过meta标签,在 html 头部设置 mata 标签如下所示，让当前 viewport 的宽度等于设备的宽度，同时不允许用户手动缩放。

`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`

*用那个插件 postcss-px-to-viewport*帮我们把px转换为vw
`npm install postcss-px-to-viewport --save-dev`

查看端口占用的进程：*netstat -ano | findstr 8080*

终结指定进程：*taskkill /pid xxx /f*