import { createRouter, createWebHistory } from 'vue-router'
import CounterDisplay from '@/views/CounterDisplay.vue'
import NotFound from '@/views/NotFound.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
    {
    path: '/',
    name: 'HomePage',
    component: HomePage
    }
    ,
  {
    path: '/counter',
    name: 'CounterDisplay',
    component: CounterDisplay
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
