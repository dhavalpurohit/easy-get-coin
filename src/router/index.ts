import { createRouter, createWebHistory } from 'vue-router'
import Default from '../views/Default.vue'
import Home from '../components/Home/index.vue'
import Game from '../components/Game/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/game',
          component: Game
        },
        {
          path: '/funding-details',
          component: Home
        },
        {
          path: '/deposit-and-withawal',
          component: Home
        },
        {
          path: '/help-center',
          component: Home
        },
        {
          path: '/contact-us',
          component: Home
        },
      ]
    },
  ]
})

export default router
