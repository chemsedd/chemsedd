import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import GraphicDesignView from "../views/GraphicDesignView.vue"
import ProgrammingView from "../views/ProgrammingView.vue"
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

const routes = [
  // Home page
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Work page (graphic design & programming)
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/work/graphicdesign',
    name: 'Graphic Design',
    component: GraphicDesignView
  },
  {
    path: '/work/programming',
    name: 'Programming',
    component: ProgrammingView
  },
  // About me page
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // Contact me page
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

// Creating router instance with `routes` argument
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router