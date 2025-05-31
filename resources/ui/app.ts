import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import PrimeVue from 'primevue/config'
import './css/app.css'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.use(PrimeVue, {
  unstyled: true,
})

app.mount('#app')
