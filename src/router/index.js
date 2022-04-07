import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// configure router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL
});

export default router;
