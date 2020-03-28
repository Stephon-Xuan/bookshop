import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
// import Admin from '@/pages/Admin'
import Cart from '@/pages/Cart'
import Detail from '@/pages/Detail'
import Order from '@/pages/Order'
import Issue from '@/pages/Issue'
import None from '@/pages/404'
import About from '@/pages/About'
import Usedbookshop from '@/pages/Usedbookshop'
import Login from '@/pages/Login/Login'
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
      path: '/usedbookshop',
      component: Usedbookshop
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/detail/:id',
      component: Detail
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
