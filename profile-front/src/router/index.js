import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentNew from '@/views/StudentNew.vue'
import StudentEdit from '@/views/StudentEdit.vue'
import StudentView from '@/views/StudentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path: '/createE',
   name: 'createE',
   component: StudentNew
  },
  {
    path: '/editE/:id',
    name: 'editE',
    component: StudentEdit
  },
  {
    path: '/viewE/:id',
    name: 'viewE',
    component: StudentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
