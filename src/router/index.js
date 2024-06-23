import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const initRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: initRoutes
})

export function resetRouter () { //清空路由的方法
  const newRouter = new VueRouter({
    routes: initRoutes
  }  
  )
  router.matcher = newRouter.matcher 
}

export default router
