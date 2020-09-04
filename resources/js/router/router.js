import Vue from "vue/dist/vue.common.js";
import VueRouter from "vue-router";
import routes from "./routes";
import store from '@/store'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((routeTo, routeFrom, next) => {

    if ((routeTo.meta.guest || routeTo.matched.some(parent => parent.meta.guest))
        && store.state.user.isLoggedIn)
    {
        return next({ name: 'home' });
    }

    if ((routeTo.meta.auth || routeTo.matched.some(parent => parent.meta.auth))
        && ! store.state.user.isLoggedIn)
    {
        return next({ name: 'login' });
    }

    if ((routeTo.meta.verified || routeTo.matched.some(parent => parent.meta.verified))
        && store.state.user.user.isVerified !== 2)
    {
        return next({ name: 'home' });
    }

    next()
});

export default router;
