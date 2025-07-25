import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import OverviewView from '../views/OverviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:LoginView,
    },
    {
      path: '/overview',
      name: 'overview',
      component:() => import('../views/OverviewView.vue'),
    
    }
  ],
})

export default router