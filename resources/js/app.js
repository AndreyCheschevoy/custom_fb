import Vue from 'vue';
import router from './router';
import App from './components/AppComponent';
// import store from './store';

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        App
    },

    router,

    // store,
});
