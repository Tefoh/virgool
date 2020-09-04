<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <BaseDataTable
                        fetch-url="/api/admin/drafts"
                        delete-url="/api/admin/drafts/destroy"
                        route-name="admin-draft-index"
                        title-text="مدیریت پیش نویس ها"
                        item-key="link"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import BaseDataTable from '@/components/BaseDataTable';

    export default {
        name: "DraftIndex",

        components: {
            BaseDataTable
        },

        metaInfo: {
            title: 'مدیریت پیش نویس ها'
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
                        text: 'مدیریت پیش نویس ها',
                        disabled: true,
                        exact: true
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
