<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <BaseDataTable
                        fetch-url="/api/admin/posts"
                        delete-url="/api/admin/posts/destroy"
                        show-route="post-show"
                        title-text="مدیریت پست ها"
                        route-name="admin-post-index"
                        item-key="slug"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import BaseDataTable from "@/components/BaseDataTable";

    export default {
        name: "PostIndex",

        components: {
            BaseDataTable
        },

        metaInfo: {
            title: 'مدیریت پست ها'
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
                        text: 'مدیریت پست ها',
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
