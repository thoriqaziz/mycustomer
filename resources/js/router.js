import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';
import CustomersIndex from './views/CustomersIndex';
import CustomersCreate from './views/CustomersCreate';
import CustomersDetail from './views/CustomersDetail';
import CustomersEdit from './views/CustomersEdit';

Vue.use(VueRouter);

export default new VueRouter ({
    routes: [
        {
            path:'/', component: ExampleComponent,
        },
        {
            path:'/customers', component: CustomersIndex,
        },
        {
            path:'/customers/create', component: CustomersCreate,
        },
        {
            path:'/customers/:id', component: CustomersDetail,
        },
        {
            path:'/customers/:id/edit', component: CustomersEdit,
        }
    ],
    mode: 'history'
});