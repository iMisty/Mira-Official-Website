import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/home';
import about from './components/about';

Vue.use(VueRouter);

const routes =  [
    {
        path: '/home',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    // redirect
    {
        path: '/',
        redirect: '/home'
    }
]

var router = new VueRouter({
    routes
});

export default router;