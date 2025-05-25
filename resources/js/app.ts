import { createApp } from 'vue'
import router from './router'
import App from './components/App.vue'
import '../css/app.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App).use(router).use(VueQueryPlugin).mount('#app')
