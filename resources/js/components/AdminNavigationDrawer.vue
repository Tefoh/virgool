<template>
    <v-navigation-drawer right
                         app
                         v-model="drawer"
    >
        <v-list>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <v-avatar>
                        <v-img :src="user.profile_src"
                        ></v-img>
                    </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ user.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                        <template v-for="(role, index) in user.roles">
                            {{ role }}<template v-if="user.roles.length - 1 !== index">,</template>
                        </template>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item v-for="item in items"
                         :key="item.text"
                         :to="item.to"
                         v-if="canShowLink(item.roles)"
            >
                <v-list-item-content>
                    <p>{{ item.text }}</p>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "AdminNavigationDrawer",

        props: ['drawer'],

        data() {
            return {
                items: [
                    {
                        text: 'داشبورد',
                        class: 'white--text',
                        to: { name: 'admin-dashboard' },
                        roles: []
                    },
                    {
                        text: 'مدیریت کاربران',
                        class: 'white--text',
                        to: { name: 'admin-user-index' },
                        roles: ['admin']
                    },
                    {
                        text: 'مدیریت نقش ها',
                        class: 'white--text',
                        to: { name: 'admin-role-index' },
                        roles: ['admin']
                    },
                    {
                        text: 'مدیریت پست ها',
                        class: 'white--text',
                        to: { name: 'admin-post-index' },
                        roles: ['admin', 'author']
                    },
                    {
                        text: 'مدیریت پیش نویس ها',
                        class: 'white--text',
                        to: { name: 'admin-draft-index' },
                        roles: ['admin', 'author']
                    },
                    {
                        text: 'مدیریت دسته بندی ها',
                        class: 'white--text',
                        to: { name: 'admin-category-index' },
                        roles: ['admin', 'author']
                    },
                    {
                        text: 'مدیریت نظرات',
                        class: 'white--text',
                        to: { name: 'admin-comment-index' },
                        roles: ['admin', 'author']
                    },
                ]
            }
        },

        computed: mapState('user', ['user']),

        methods: {
            canShowLink(roles) {
                if (! roles || roles.length === 0) return true;

                return roles.some(role => {
                    return this.user.roles.includes(role);
                });
            }
        }
    }
</script>

<style scoped>

</style>
