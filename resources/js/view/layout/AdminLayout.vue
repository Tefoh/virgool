<template>
    <div>
        <admin-navbar @show-navigation="drawer = !drawer"
        ></admin-navbar>

        <admin-navigation-drawer :drawer="drawer"
        ></admin-navigation-drawer>

        <router-view></router-view>
    </div>
</template>

<script>
    import AdminNavbar from "@/components/AdminNavbar";
    import AdminNavigationDrawer from "@/components/AdminNavigationDrawer";

    export default {
        name: "AdminLayout",

        components: {
            AdminNavbar,
            AdminNavigationDrawer
        },

        data() {
            return {
                drawer: true,
            }
        }
    }
</script>

<style scoped>

</style>
