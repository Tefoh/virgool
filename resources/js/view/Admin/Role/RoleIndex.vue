<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>


                    <BaseDataTable fetch-url="/api/admin/roles"
                                   route-name="admin-role-index"
                                   title-text="مدیریت نقش ها"
                                   item-key="name"
                                   create-item-route="admin-role-create"
                                   edit-route="admin-role-edit"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import BaseDataTable from '@/components/BaseDataTable'

    export default {
        name: "RoleIndex",

        components: {
            BaseDataTable
        },

        metaInfo: {
            title: 'مدیریت نقش ها'
        },

        data() {
            return {
                breadcrumbs: [
                    [
                        {
                            text: 'داشبورد',
                            disabled: false,
                            to: { name: 'admin-dashboard' },
                            exact: true
                        },
                        {
                            text: 'مدیریت نقش ها',
                            disabled: true,
                            exact: true
                        },
                    ],
                ]
            }
        }
    }
</script>

<style scoped>

</style>
