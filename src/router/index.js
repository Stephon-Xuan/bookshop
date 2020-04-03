import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
// import Admin from '@/pages/Admin'
import Cart from '@/pages/Cart'
import Detail from '@/pages/Detail'
import Order from '@/pages/Order'
import Issue from '@/pages/Issue/Issue'
import None from '@/pages/404'
import About from '@/pages/About'
import UsedBookshop from '@/pages/UsedBookshop'
import Login from '@/pages/Login/Login'
import Donate from '@/pages//Donate/Donate'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/issue',
      component: Issue
    },
    {
      path: '/usedBookshop',
      component: UsedBookshop
    },
    {
      path: '/order',
      component: Order
    },
    {
      // path: '/detail/:id',
      path: '/detail',
      component: Detail
    },
    {
      path: '/donate',
      component: Donate
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/404',
      component: None
    },
    {
      path: '/about',
      component: About
    }

  ]
})
