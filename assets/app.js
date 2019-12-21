import vue from 'vue';
import vuerouter from 'vue-router';
import app from './components/app';
import wheel from './components/wheel';

vue.use(vuerouter);

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