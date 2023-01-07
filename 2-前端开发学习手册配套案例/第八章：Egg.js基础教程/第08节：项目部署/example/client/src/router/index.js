import Vue from 'vue'
import VueRouter from 'vue-router'
import Student from '../views/Student.vue'
import Clazz from '../views/Clazz.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/student',
    name: '',
    component: Student
  },{
    path: '/clazz',
    name: '',
    component: Clazz
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(to.path == '/login'){
    next();
  }else{
    if(localStorage.getItem("token")){
      next();
    }else{
      next("/login")
    }
  }
})

export default router
