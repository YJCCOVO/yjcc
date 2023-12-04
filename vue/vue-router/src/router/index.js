import { createWebHistory,createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../views/homeChild/newest.vue'

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path: '/home',//路由路径
        component: Home,//路由组件
        children:[
            {
                path: '/home',
                redirect:'/home/newest' //路由的重定向,点开页面就是newest
            },
            {
                path: '/home/newest',
                component: Newest 
            },
            {
                path: 'recommend',
                component: () => import('../views/homeChild/recommend.vue') //另一种引入方式
            }
        ]
    },
    {
        path: '/about',//路由路径
        component: About//路由组件
    }
]

const router = createRouter({
    history: createWebHistory(),//路由history模式，可选hash模式
    routes
})

export default router
