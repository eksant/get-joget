import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import HelloWorld from '@/components/HelloWorld'
import RoomGame from '@/components/RoomGame'
=======
import HelloWorld from '@/components/HelloWorld'
import ArrowGenerator from '@/components/ArrowGenerator'
>>>>>>> arrow-generator

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
>>>>>>> arrow-generator
    }
  ]
})
