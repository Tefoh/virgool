import Vue from 'vue/dist/vue.common.js';
import Vuetify from "vuetify";

Vue.use(Vuetify);

const options = {
    rtl: true,
    theme: {
        dark: localStorage.getItem('isDark') == 1 ? true : false
    }
};

export default new Vuetify(options);
