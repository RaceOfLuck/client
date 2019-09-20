import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateRoom from './views/CreateRoom.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/createroom',
      name: 'createRoom',
      component: CreateRoom
    },
    {
      path: '/userRoom',
      name: 'userRoom',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/UserRoom.vue')
    },
    {
      path: '/game',
      name : 'game',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/GameBoard.vue')
    }
  ]
})
