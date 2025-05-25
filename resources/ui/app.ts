import { createApp } from 'vue'
import router from './router'
import App from './components/App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './css/app.css'

createApp(App).use(router).use(VueQueryPlugin).mount('#app')
