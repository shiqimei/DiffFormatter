import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/index'
import Result from '@/components/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: welcome
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
