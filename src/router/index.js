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
import borrow_classify from '@/components/borrow_classify'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/borrow_classify',
      component:borrow_classify
    },
    {
      path:'/page_bottom',
      component:page_bottom
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/',
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
