import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

// View
import Home from './views/Home.vue'
import LandingPage from './views/LandingPage.vue'
import Lobby from './views/Lobby.vue'
import Game from './views/Game.vue'

Vue.use(BootstrapVue)
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
      path: '/landingPage',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    },
    {
      path: '/game',
      name : "game",
      component : Game
    }
  ]
})
