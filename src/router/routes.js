// general Views
const DashboardPage = () => import(/* webpackChunkName: "dashboardpage" */ '@/pages/DashboardPage.vue');
const CustomersPage = () => import(/* webpackChunkName: "customerspage" */ '@/pages/CustomersPage.vue');
const CarPage = () => import(/* webpackChunkName: "carpage" */ '@/pages/CarPage.vue');
const BrandsPage = () => import(/* webpackChunkName: "brandspage" */ '@/pages/BrandsPage.vue');
const RentPage = () => import(/* webpackChunkName: "rentpage" */ '@/pages/RentPage.vue');

const routes = [
    {
        path: '/',
        name: 'dashboardpage',
        component: DashboardPage
    },
    {
        path: '/clientes',
        name: 'customerspage',
        component: CustomersPage
    },
    {
        path: '/carros',
        name: 'carpage',
        component: CarPage
    },
    {
        path: '/marcas',
        name: 'brandspage',
        component: BrandsPage
    },
    {
        path: '/aluguel',
        name: 'rentpage',
        component: RentPage
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
