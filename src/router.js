import {createRouter,createWebHistory} from 'vue-router'
import AppHome from './components/AppHome'
import AppComplaintEntry from './components/AppComplaintEntry'

const routes = [
    { path: '/', component: AppHome },
    { path: '/complaintentry', component: AppComplaintEntry },
  ]
  
const router = createRouter({
    mode:'history',
    history: createWebHistory(),
    routes, 
  })

export default router;