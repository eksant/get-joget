import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import HelloWorld from '@/components/HelloWorld'
import RoomGame from '@/components/RoomGame'
<<<<<<< HEAD
=======
import HelloWorld from '@/components/HelloWorld'
import ArrowGenerator from '@/components/ArrowGenerator'
>>>>>>> arrow-generator
=======
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import SignIn from '@/components/SignIn'
>>>>>>> jwt, auth system, validation

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      meta: {},
      path: '/',
<<<<<<< HEAD
      name: 'RoomGame',
      component: RoomGame
=======
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/arrow-generator',
      name: 'ArrowGenerator',
      component: ArrowGenerator
<<<<<<< HEAD
>>>>>>> arrow-generator
=======
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
>>>>>>> jwt, auth system, validation
    }
  ]
})
