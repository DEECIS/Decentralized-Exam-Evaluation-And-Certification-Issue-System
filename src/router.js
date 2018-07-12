import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Exam from './views/Exam.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: Exam
    },
    {
      path: '/result/:id',
      name: 'result',
      component: Result
    }
  ]
})
