<template>
    <div>
        <verify-banner v-if="user && user.isVerified === 1"></verify-banner>
        <front-navbar @show-navigation="drawer = true"
                      @show-notification="showNotification = true"
        ></front-navbar>

        <front-navigation-drawer v-model="drawer"
        ></front-navigation-drawer>

        <front-notification-drawer v-model="showNotification"
        ></front-notification-drawer>

        <router-view></router-view>
    </div>
</template>

<script>
    import FrontNavbar from "@/components/FrontNavbar";
    import FrontNavigationDrawer from "@/components/FrontNavigationDrawer";
    import FrontNotificationDrawer from "@/components/FrontNotificationDrawer";
    import VerifyBanner from "@/components/VerifyBanner"
    import { mapState } from 'vuex'

    export default {
        name: "FrontLayout",

        metaInfo: {
            titleTemplate: '%s وبلاگ وب آموز'
        },

        components: {
            FrontNavbar,
            FrontNavigationDrawer,
            FrontNotificationDrawer,
            VerifyBanner
        },

        data() {
            return {
                drawer: false,
                showNotification: false
            }
        },

        computed: {
            ...mapState('user', ['user'])
        }
    }
</script>

<style scoped>

</style>
