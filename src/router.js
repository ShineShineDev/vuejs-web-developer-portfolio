import vueRouter from 'vue-router';

import HomeComponent from "./components/HomeComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import ProfileComponent from './components/ProfileComponent.vue'
import  AboutMe from './components/AboutMeComponent.vue'




const router = new vueRouter({
    mode : 'history',
    routes: [
        {
            path : '/',
            component : HomeComponent
        },
        {
          path : '/contact',
          component : ContactComponent
        },
        {
         path: '/profile',
         component : ProfileComponent
        },
        {
            path : '/aboutme',
            component : AboutMe
        },
    ]
})
export default router
