import vue from 'vue';
import vuerouter from 'vue-router';
import gsap from 'gsap';
import app from './components/app';
import wheel from './components/wheel';

vue.use(vuerouter);

window.gsap = gsap;

const router = new vuerouter({
    routes: [{
        path: '/',
        component: app,
        children: [{
            path: '/',
            component: wheel
        }] 
    }]
});

new vue({
    el: '#vue-app',
    router
});