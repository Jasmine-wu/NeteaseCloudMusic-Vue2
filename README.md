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
