import { createRouter, createWebHistory } from 'vue-router'
import TopPage from './pages/Top.vue'
import AboutPage from './pages/About.vue'

const routes = [
  { path: '/', component: TopPage },
  { path: '/about', component: AboutPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
