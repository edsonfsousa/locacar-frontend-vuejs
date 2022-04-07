// general Views
const NotFound = () => import(/* webpackChunkName: "notfound" */ '@/pages/NotFoundPage.vue');
const HomePage = () => import(/* webpackChunkName: "homepage" */ '@/pages/HomePage.vue');

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage
    },
    {
        path: '*',
        name: 'notFound',
        component: NotFound
    }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/
export default routes;
