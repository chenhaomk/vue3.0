import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '@/views/pages/login.vue'
import dashboard from '@/views/dashboard.vue'
import icon from '@/views/pages/icon.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {
            title: '系统首页',
            noAuth: true
          },
          component: dashboard
        },
        {
          path: '/system-user',
          name: 'system-user',
          meta: {
            title: '用户管理',
            permiss: 11
          },
          component: () => import('../views/system/user.vue')
        },
        {
          path: '/icon',
          name: 'icon',
          meta: {
            title: '图标',
            permiss: '5'
          },
          component: icon
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router
