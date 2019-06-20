import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'connection-list',
      component: require('@/components/ConnectionList').default
    },
    {
      path: '/base',
      name: 'connection-base',
      component: require('@/components/ConnectionBase').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
