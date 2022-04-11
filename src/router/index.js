import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/AboutView.vue')
  },
  {
    path: '/about/operationalstructure',
    name: 'operationalstructure',
    component: () => import('../views/about/OperationalView.vue')
  },
  {
    path: '/about/executiveboard',
    name: 'executiveboard',
    component: () => import('../views/about/BoardView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news/NewsView.vue')
  },
  {
    path: '/news/videos',
    name: 'videos',
    component: () => import('../views/news/VideosView.vue')
  },
  {
    path: '/news/publication',
    name: 'publication',
    component: () => import('../views/news/PublicationView.vue')
  },
  {
    path: '/casestudies',
    name: 'casestudies',
    component: () => import('../views/CasestudiesView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
