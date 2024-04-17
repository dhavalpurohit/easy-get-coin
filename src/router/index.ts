import { createRouter, createWebHistory } from 'vue-router'
import Default from '../views/Default.vue'
import Home from '../components/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          component: Home
        },
      ]
    },
    { path: '/home', redirect: '/' }
  ]
})

export default router
