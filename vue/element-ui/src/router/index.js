import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 {
  path:'/',
  component:() => import('@/views/Login.vue')
 },
 {
  // path:'/home/:user',  第一种
  
  // path:'/home',
  // name:'home', 第二种

  // path:'/home/:user',
  // home:'home', 第三种

  path:'/home',
  name:'home',

  component:() => import('@/views/Home.vue')
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
