import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/views/partial/Footer'
import NavBar from '@/views/partial/NavBar'
import Home from '@/views/Home'
import NotFound from '@/views/NotFound'
import Dashboard from '@/views/Dashboard'
import IncidentView from '@/views/IncidentView'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  abstract: true,
  scrollBehavior (to, from, savedPosition) {
    window.scrollTo(0, 0)
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        navbar: NavBar,
        default: Home,
        footer: Footer
      },
      meta: { auth: true }
    },
    {
      path: '/Incident/:incidentid',
      name: 'Incident',
      components: { navbar: NavBar, default: IncidentView, footer: Footer },
      meta: { auth: true }
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      components: { navbar: NavBar, default: Dashboard, footer: Footer },
      meta: { auth: true }
    },
    {
      path: '/Login',
      name: 'Login',
      components: { navbar: NavBar, default: Login, footer: Footer },
      meta: { auth: false }
    },
    {
      path: '*',
      components: { navbar: NavBar, default: NotFound, footer: Footer },
      meta: { auth: false }
    }
  ]
})
