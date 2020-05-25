import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';
import CustomersIndex from './views/CustomersIndex';
import CustomersCreate from './views/CustomersCreate';
import CustomersDetail from './views/CustomersDetail';

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
        }
    ],
    mode: 'history'
});