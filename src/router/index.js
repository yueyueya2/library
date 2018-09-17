/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import book_friend from '@/components/book_friend'
import login from '@/pages/login'
import home_page from '@/pages/home_page'
import friend from '@/pages/friend'
import my from '@/pages/my'
import register from '@/pages/register'
import forget_password1 from '@/pages/forget_password1'
import forget_password2 from '@/pages/forget_password2'
import change_password1 from '@/pages/change_password1'
import change_password2 from '@/pages/change_password2'
import change_head from '@/pages/change_head'
import search from '@/pages/search'
import authenty from '@/pages/authenty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/book_friend',
      component:book_friend
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
      path:'/forget_password1',
      component:forget_password1
    },
    {
      path:'/forget_password2',
      component:forget_password2
    },
    {
      path:'/change_password1',
      component:change_password1
    },
    {
      path:'/change_password2',
      component:change_password2
    },
    {
      path:'/change_head',
      component:change_head
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/authenty',
      component:authenty
    }
  ]
})
