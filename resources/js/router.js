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
            meta: { title: 'Welcome' }
        },
        {
            path:'/customers', component: CustomersIndex,
            meta: { title: 'List Customers' }
        },
        {
            path:'/customers/create', component: CustomersCreate,
            meta: { title: 'Create Customer' }
        },
        {
            path:'/customers/:id', component: CustomersDetail,
            meta: { title: 'Customer Detail' }
        },
        {
            path:'/customers/:id/edit', component: CustomersEdit,
            meta: { title: 'Edit Customer' }
        }
    ],
    mode: 'history'
});