require('./bootstrap');

window.Vue = require('vue/dist/vue.common.js');
import vuetify from './plugin/vuetify';
import router from './router/router';
import store from './store';
import VueMeta from 'vue-meta';
import VueCompositionApi from '@vue/composition-api';
import VueClipboard from 'vue-clipboard2';
import moment from 'moment-jalaali';
window.moment = moment;

import './blank.scss';

Vue.use(VueCompositionApi);
Vue.use(VueMeta);
Vue.use(VueClipboard);
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store
});
