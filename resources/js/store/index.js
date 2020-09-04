import Vue from 'vue/dist/vue.common.js';
import Vuex from 'vuex';
import * as user from '@/store/modules/user';
import * as draft from '@/store/modules/draft';
import * as post from '@/store/modules/post';
import * as category from '@/store/modules/category';
import * as notification from '@/store/modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        draft,
        post,
        category,
        notification
    }
})
