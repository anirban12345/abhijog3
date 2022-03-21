import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import store from "./store";

//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app=createApp(App)

app.use(router)
.use(store)
.use(VueSweetalert2)
.mount('#app')

