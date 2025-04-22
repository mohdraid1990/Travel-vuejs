import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Destinations from '../views/Destinations.vue'
import Book from '../views/Book.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: Destinations
  },
  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/destinations/:id',
    name: 'DestinationDetails',
    component: () => import('../views/DestinationDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 