<template>
    <v-navigation-drawer app
                         temporary
                         :value="value"
                         @input="changeDrawer"
    >
        <v-list>
            <v-list-item v-for="notification in $store.state.notification.notifications" :key="notification.id">
                <v-list-item-content>
                    <a :href="notification.data.link"
                       class="pa-3"
                       :class="{ 'grey lighten-2 black--text': !! notification.read_at }"
                       @click.prevent="readNotification(notification)"
                    >{{ notification.data.text }}</a>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "FrontNotificationDrawer",

        props: ['value'],

        created() {
            this.$store.dispatch('notification/getNotifications');
        },

        methods: {
            changeDrawer(event) {
                this.$emit('input', event)
            },
            readNotification(notification) {
                axios.patch(`/api/notifications/${notification.id}`)
                    .then(() => {
                        this.$router.push(notification.data.link)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
