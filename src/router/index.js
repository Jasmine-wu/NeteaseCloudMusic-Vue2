import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import PLay from '@/views/PLay'

// 全局注册
Vue.use(VueRouter);

const routes = [{
        path: '/',
        redirect: '/layout'

    },
    {
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [{
                path: 'home',
                component: Home,
                // 3.1 绑定路由额外信息
                meta: {
                    title: "首页"
                }
            },
            {
                path: 'search',
                component: Search,
                // 3.1 绑定路由额外信息
                meta: {
                    title: "搜索"
                }
            },
        ]

    },
    {
        path: '/play',
        component: PLay

    }
];

const router = new VueRouter({
    routes
})

export default router;