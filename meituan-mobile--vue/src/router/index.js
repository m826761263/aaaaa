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
      component: () => import('../views/MiaoIndex.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/list/:id',
      name: 'list',
      component: () => import('../views/MiaoList.vue'),
      props: true,
      meta:{requireAuth:true}
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/MiaoDetile.vue'),
      props:true
      ,meta:{requireAuth:true}
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('../views/MiaoMy.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/MiaoCart.vue'),
      meta:{requireAuth:true}
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/MiaoSettings.vue'),
      meta:{requireAuth:true}
    }
    ,
    {
      path: '/massage',
      name: 'massage',
      component: () => import('../views/MiaoMassage.vue'),
      meta:{requireAuth:true}
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Miaologin.vue'),
    },
    {
      path: '/reg',
      name: 'reg',
      component: () => import('../views/MiaoRegister.vue'),
    }
    ,
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Miao404.vue'),
    }
  ]
})

export default router
