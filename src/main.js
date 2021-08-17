import Vue from 'vue'
import App from './App.vue'
// 移动端适配:flexible(改变html fontsize)+ 属性设置全部用rem
// 第三方组件用的是px怎么办？webpack配合postcss+postcc-pxtorem将px转成rem
import '@/mobile/flexible.js'
import '@/styles/reset.css'
import router from '@/router'
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage, Cell, CellGroup, Icon, Search, List } from 'vant'
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')