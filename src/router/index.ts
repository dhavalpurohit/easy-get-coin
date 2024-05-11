import { createRouter, createWebHistory } from 'vue-router'
import Default from '@/views/Default.vue'
import Details from '@/views/Details.vue'
import Home from '../components/Home/index.vue'
import Game from '../components/Game/index.vue'
import VerificationVue from '@/components/Verification/index.vue'
import BetDetailsVue from '@/components/BetDetails/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          redirect: '/home'
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
    {
      path: '/',
      component: Details,
      children: [
        {
          path: 'verification',
          component: VerificationVue,
          name: 'Verification'
        },
        {
          path: 'betdetails',
          component: BetDetailsVue,
          name: 'Bet Details'
        },
      ]
    }
  ]
})
export default router
