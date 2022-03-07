import {createRouter,createWebHistory} from 'vue-router'
import AppHome from './components/AppHome'
import AppPSEntry from './components/AppPSEntry'
import AppPS from './components/AppPS'

const routes = [
    { path: '/', component: AppHome },
    { path: '/psentry', component: AppPSEntry },
    { path: '/psedit/', component: AppPS },
    { path: '/pssearch', component: AppPS },    
  ]
  
const router = createRouter({
    mode:'history',
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router;