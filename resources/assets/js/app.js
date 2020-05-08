/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example', require('./components/Example.vue'));


//budget
Vue.component('budget-create-component', require('./components/budget/CreateComponent.vue'));
Vue.component('budget-cliam-component', require('./components/budget/ClaimComponent.vue'));
Vue.component('budget-home-component', require('./components/budget/HomeComponent.vue'));
Vue.component('budget-index-component', require('./components/budget/IndexComponent.vue'));
Vue.component('budget-matter-component', require('./components/budget/MatterComponent.vue'));
Vue.component('budget-search-component', require('./components/budget/SearchComponent.vue'));
Vue.component('budget-status-component', require('./components/budget/StatusComponent.vue'));

//budtetParts
Vue.component('budget-estimates-component', require('./components/budget/parts/EstimatesComponent.vue'));
Vue.component('budget-parts-delivery-date-picker-component', require('./components/budget/parts/DeliveryDatePickerComponent.vue'));
Vue.component('budget-parts-order-date-picker-component', require('./components/budget/parts/OrderDatePickerComponent.vue'));
Vue.component('budget-parts-sales-date-picker-component', require('./components/budget/parts/SalesDatePickerComponent.vue'));

Vue.component('budget-update-estimates-component', require('./components/budget/parts/UpdateEstimatesComponent.vue'));
Vue.component('budget-parts-update-delivery-date-picker-component', require('./components/budget/parts/UpdateDeliveryDatePickerComponent.vue'));
Vue.component('budget-parts-update-order-date-picker-component', require('./components/budget/parts/UpdateOrderDatePickerComponent.vue'));
Vue.component('budget-parts-update-sales-date-picker-component', require('./components/budget/parts/UpdateSalesDatePickerComponent.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);
import store from './store';
import moment from 'vue-moment';
Vue.use(moment);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdiSvg',
        }
    }),
    store,
});
