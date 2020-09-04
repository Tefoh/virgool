<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <BaseDataTable fetch-url="/api/admin/users"
                                   delete-url="/api/admin/users/destroy"
                                   route-name="admin-user-index"
                                   edit-route="admin-user-edit"
                                   show-route="user-posts"
                                   title-text="مدیریت کاربران"
                                   item-key="username"
                                   create-item-route="admin-user-create"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import BaseDataTable from '@/components/BaseDataTable';

    export default {
        name: "UserIndex",

        components: {
            BaseDataTable
        },

        metaInfo: {
            title: 'مدیریت کاربران'
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        text: 'داشبورد',
                        disabled: false,
                        to: { name: 'admin-dashboard' },
                        exact: true
                    },
                    {
                        text: 'مدیریت کاربران',
                        disabled: true,
                        exact: true
                    },
                ],
            }
        },
    }
</script>

<style scoped>

</style>
