import Vue from 'vue'
import Router from 'vue-router'
import ArrowGenerator from '@/components/ArrowGenerator'
import RoomGame from '@/components/RoomGame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      meta: {},
      path: '/',
      name: 'RoomGame',
      component: RoomGame
    },
    {
      path: '/arrow-generator',
      name: 'ArrowGenerator',
      component: ArrowGenerator
    }
  ]
})
