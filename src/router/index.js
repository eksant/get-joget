import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
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
    }
  ]
})
