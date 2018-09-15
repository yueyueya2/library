/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import home_page from '@/pages/home_page'
import friend from '@/pages/friend'
import my from '@/pages/my'
import register from '@/pages/register'
import forget_password1 from '@/pages/forget_password1'
import book_friend from '@/components/book_friend'
import swipe from '@/components/swipe'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/swipe',
      component:swipe
    },
    {
      path:'/sss',
      component:book_friend
    },
    {
      path:'/',
      component:login
    },
    {
      path:'/home_page',
      component:home_page
    },
    {
      path:'/friend',
      component:friend
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
      path:'/sss',
      component:forget_password1
    }
  ]
})
