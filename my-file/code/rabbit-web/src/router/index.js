import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/inde.vue'
import Category from '@/views/Category/index.vue'
//createRoute创建router实例对象
//createWebHistory:创建history模式的路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      component:Layout,
      //配置二级路由
      children:[
        {
          path:"",
          component:Home
        },
        {
          //动态路由传参
          path:"category/:id",
          component:Category
        }
      ]
    },
    {
      path:"/login",
      component:Login
    }
  ],
})

export default router
