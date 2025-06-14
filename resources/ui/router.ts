import { createRouter, createWebHistory } from 'vue-router'
import TopPage from './pages/Top.vue'
import AboutPage from './pages/About.vue'

const routes = [
  { path: '/', component: TopPage, meta: { layout: 'default' } },
  { path: '/about', component: AboutPage, meta: { layout: 'default' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
