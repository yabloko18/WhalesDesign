import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
  {
    path: '/web-design',
    name: 'WebDesign',
    component: () => import(/* webpackChunkName: "web-design" */ '../views/BriefWebDesign.vue')
  },
  {
    path: '/presentation',
    name: 'Presentation',
    component: () => import(/* webpackChunkName: "presentation" */ '../views/BriefPresentation.vue')
  },
  {
    path: '/logo',
    name: 'Logo',
    component: () => import(/* webpackChunkName: "logo" */ '../views/BriefLogo.vue')
  },
  {
    path: '/identity',
    name: 'Identity',
    component: () => import(/* webpackChunkName: "identity" */ '../views/BriefIdentity.vue')
  },
  {
    path: '/creatives',
    name: 'Creatives',
    component: () => import(/* webpackChunkName: "creatives" */ '../views/BriefCreatives.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Projects.vue')
  },
  {
    path: '/brief',
    name: 'Brief',
    component: () => import(/* webpackChunkName: "brief" */ '../views/Brief.vue')
  },
  {
    path: '*',
    name: 'Page404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
