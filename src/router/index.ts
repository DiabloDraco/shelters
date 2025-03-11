import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shelters',
      name: 'shelters',
      component: () => import('../views/Shelters.vue')
    },
    {
      path: '/shelters/:id',
      name: 'shelter-detail',
      component: () => import('../views/ShelterDetail.vue')
    },
    {
      path: '/donations',
      name: 'donations',
      component: () => import('../views/Donations.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    }
  ]
})

export default router