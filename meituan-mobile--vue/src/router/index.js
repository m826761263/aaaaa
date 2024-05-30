import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/index',
      name: 'index',
      component: () => import('../views/MiaoIndex.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/MiaoList.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/MiaoDetile.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/MiaoMy.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/MiaoCart.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/MiaoSettings.vue')
    }
    ,
    {
      path: '/massage',
      name: 'massage',
      component: () => import('../views/MiaoMassage.vue')
    }
  ]
})

export default router
