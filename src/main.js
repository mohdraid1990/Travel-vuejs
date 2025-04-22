import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Destinations from './views/Destinations.vue'
import Contact from './views/Contact.vue'
import Book from './views/Book.vue'
import DestinationDetails from './views/DestinationDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/destinations', component: Destinations },
    { path: '/contact', component: Contact },
    { path: '/book', component: Book },
    { path: '/destinations/:id', component: DestinationDetails }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')