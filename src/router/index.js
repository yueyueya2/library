/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home_page from '@/pages/home_page'
import book_friend from '@/pages/book_friend'
import my from '@/pages/my'
import register from '@/pages/register'
import forget_password1 from '@/pages/forget_password1'
import page_bottom from '@/components/page_bottom'
import swipe from '@/components/swipe'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/swipe',
      component:swipe
    },
    {
      path:'/',
      component:page_bottom
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/home_page',
      component:home_page
    },
    {
      path:'/book_friend',
      component:book_friend
    },
    {
      path:'/my',
      component:my
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/forget_password1',
      component:forget_password1
    }
  ]
})
