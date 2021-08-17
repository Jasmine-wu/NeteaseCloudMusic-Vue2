#   网易云音乐mock项目
### 准备工作
1.  启动网易云node.js本地接口服务
    ```shell
    git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
    cd NeteaseCloudMusicApi 
    npm install 
    node app.js
    # server running @ http://localhost:3000
    ```
### 网易云音乐API文档
https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e5%ae%89%e8%a3%85
### 项目初始化
```shell
# 安装依赖module和工具
vue create jmusic
cd jmusic 
yarn add axios vue-router vant
yarn add babel-plugin-import -D
# 配置babel.config.json（参考vant官方）
# 新建vue.config.js+配置
yarn serve

# 添加mobile/flexible.js
# 添加styles/reset.css
```
```js
import '@/mobile/flexible'
import '@/styles/reset.css'

```

### 主要功能
```js
// 1.设置路由/路由挂载
// 1.1 一级路由挂载
// 1.2 layout下二级路由挂载

// 2. tabBar集成路由

// 3. NavBar标题切换
// 分析:
// 3.1 在对应路由meta里绑定标题信息
// 3.2 监听路由对象$route，拿到路由绑定的数据

// 4. 封装网络请求
// 4.1 封装axios -> utils/request.js
// 4.2 封装api   -> api->Home/home.js
// 4.3 统一导出api ->api->index.js

// 5. 发起请求，铺设首页推荐歌单
// 6. 发起请求，铺设首页最新音乐

// 7. 搜索页
// 7.1 展示热搜关键字
// 7.2 展示搜索结果
// 7.2.1 点击热搜关键字，展示搜索结果
// 7.2.1 搜索框输入内容，监听回车键，展示搜索结果
// 技术点:
// 搜索关键字容器搜索结果(最佳匹配）之间的互斥效果
// Promise对象结果获取

// 8. 加载更多功能（懒加载）
// 分析：搜索页只请求了20条数据，如果滑动到20条数据后，加载更多数据出来？
// 8.1 监听滑动到底部事件，请求下一页数据
// 8.2 将下一页数据加入到原数组中(扩展语法拼接成新数组)
// 8.3 最需要注意的是loading/finished两个状态的设置

// 9. 输入框防抖:
// 效果:n秒内不触发事件,才会执行一次定时器里的代码

// 10. bug
// 1.在加载更多以后，再输入/点击搜索关键字时，会有bug
// 2. nav-bar 会跟着跑

// 11. 封装SongItem组件

// 12. 点击songItem， 播放歌曲

// 13. vant组件适配（重点）
//vant组件内部使用的是px
// 解决：
// postcss, 配合webpack对css代码进行翻译
// postcss-pxtorem,配合webpack自动将px转换成rem
// 1.yarn add postcss  postcss-pxtorem@5.1.1
// 2.新建 postcss.config.js文件，添加配置
```

### 移动端适配方案
    1. 导入flexible.js,自动根据屏幕宽度设置根标签font-size
    2. 属性设置全部用rem取代px
    3. 假如引用了第三方组件，或者自己写的大量组件也是用px怎么办？一个一个改？
        2.1 利用webpack配合插件postcss, postcss-pxtorem，将px全部转换成rem

    
#### 将px全部转换成rem如何做？
1. 下载插件
```shell
yarn add postcss  postcss-pxtorem@5.1.1
```
2. 新建postcss.config.js文件
```js
module.exports = {
    plugins: {
        // 能够把所有元素的px单位转成Rem
        'postcss-pxtorem': {
            // 以iphone6为基准:375/10
            // 设置1rem的37.5
            rootValue: 37.5,
            // 所有属性
            propList: ['*']
        }
    }
}
```
