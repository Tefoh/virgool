<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <BaseDataTable title-text="مدیریت نظرات"
                                   fetch-url="/api/admin/comments"
                                   delete-url="/api/admin/comments/destroy"
                                   route-name="admin-comment-index"
                                   item-key="id"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import BaseDataTable from '@/components/BaseDataTable';

    export default {
        name: "CommentIndex",

        components: {
            BaseDataTable
        },

        metaInfo: {
            title: 'مدیریت نظرات'
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
                        text: 'مدیریت نظرات',
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
