import {createRouter,createWebHashHistory} from 'vue-router'
import AppHome from './components/AppHome'
import AppComplaintEntry from './components/AppComplaintEntry'



const routes = [
    { path: '/', component: AppHome },
    { path: '/complaintentry', component: AppComplaintEntry },
  ]

  
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    mode:'history',
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router;