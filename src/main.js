import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Multichoice from './pages/Multichoice.vue'
import Sprout from './pages/Sprout.vue'
import Privacy from './pages/Privacy.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/multichoice', component: Multichoice },
    { path: '/sprout', component: Sprout },
    { path: '/privacy', component: Privacy }
  ]
})

createApp(App).use(router).mount('#app')
