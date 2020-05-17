import Vue from 'vue';
import VueRouter from 'vue-router';
import ExampleComponent from './components/ExampleComponent';
import CustomersIndex from './views/CustomersIndex';

Vue.use(VueRouter);

export default new VueRouter ({
    routes: [
        {
            path:'/', component: ExampleComponent,
        },
        {
            path:'/customers', component: CustomersIndex,
        }
    ],
    mode: 'history'
});