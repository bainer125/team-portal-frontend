import Vue from 'vue'
import Router from 'vue-router'

import TeamMenu from '../components/TeamMenu.vue'

Vue.use(Router)

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes: [
    {
      path: '*',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      children: [
      ]
    },
    {
      path: '/team',
      name: 'team',
      component: TeamMenu,
      children: [
        {
          name: 'roster',
          path: 'roster',
          component: () => import('../components/Roster'),
        },
        {
          name: 'stats',
          path: 'stats'
        },
        {
          name: 'calendar',
          path: 'calendar'
        },
        {
          name: 'events',
          path: 'events'
        }
      ]
    },
    {
      path: '/orders',
      name: 'orders',
      children: [
      ]
    },
    {
      path: '/inventory',
      name: 'inventory',
      children: [
      ]
    }
  ]
})
