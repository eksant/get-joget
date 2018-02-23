import Vue from 'vue'
import Router from 'vue-router'
import ArrowGenerator from '@/components/ArrowGenerator'
import RoomGame from '@/components/RoomGame'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import SignIn from '@/components/SignIn'
import BotUser from '@/components/BotUser'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/arrow-generator',
      name: 'ArrowGenerator',
      component: ArrowGenerator
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/botuser',
      name: 'BotUser',
      compoennt: BotUser
    },
    {
      meta: {},
      path: '/',
      name: 'RoomGame',
      component: RoomGame
    }
  ]
})
