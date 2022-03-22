import {createRouter,createWebHistory} from 'vue-router'
import AppLogin from './components/AppLogin'
import AppHome from './components/AppHome'
import AppPSEntry from './components/AppPSEntry'
import AppPSEdit from './components/AppPSEdit'
import AppPS from './components/AppPS'

const routes = [
    { path: '/login', component: AppLogin },
    { path: '/home', component: AppHome },
    { path: '/psentry', component: AppPSEntry },
    { path: '/psedit/:id', component: AppPSEdit },    
    { path: '/pssearch', component: AppPS },    
  ]
  
const router = createRouter({
    mode:'history',
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('loggedin');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;