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

