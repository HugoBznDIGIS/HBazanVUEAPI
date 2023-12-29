import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      // Lo hacemos con lazyloading para una mejor practica
      component: () => import('../views/AdminView.vue')
    },
    {
      // Puede contener un ID o no
      path: '/form/:id?',
      name: 'form',
      component: () => import('../views/FormView.vue')
    }
  ]
})

export default router