import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
 const routes=[
    {
         name:"Home",
         components:Home,
         path:'/'
    },
    {
        name :'Signup',
        components:Signup,
        path:'/sign-up'
    }
 ];

 const router = createRouter({
    history: createWebHashHistory(),
    routes,
 });
 export default router;