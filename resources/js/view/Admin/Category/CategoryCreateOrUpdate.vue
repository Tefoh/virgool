<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <p class="headline">{{ isEditing ? 'ویرایش دسته بندی' : 'ساخت دسته بندی' }}</p>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <v-form ref="createCategory"
                            class="mt-10"
                    >
                        <v-text-field v-model="form.title"
                                      label="عنوان دسته بندی"
                                      outlined
                                      :rules="[
                                          required('عنوان دسته بندی الزامیست')
                                      ]"
                        ></v-text-field>

                        <v-btn @click="save"
                               color="info"
                        >{{ isEditing ? 'ویرایش' : 'ذخیره' }}</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import { required } from "@/rules";

    export default {
        name: "CategoryCreateOrUpdate",

        metaInfo() {
            return {
                title: this.isEditing ? 'ویرایش دسته بندی' : 'ساخت دسته بندی'
            }
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
                        text: 'مدیریت دسته بندی ها',
                        disabled: false,
                        to: { name: 'admin-category-index' },
                        exact: true
                    },
                    {
                        text: 'ساخت دسته بندی',
                        disabled: true,
                        exact: true
                    },
                ],
                form: {
                    title: null
                },
                required
            }
        },

        computed: {
            requestUrl() {
                return this.isEditing
                    ? `/api/admin/categories/${this.$route.params.id}`
                    : '/api/admin/categories'
            },
            requestType() {
                return this.isEditing ? 'patch' : 'post';
            },
        },

        created() {
            if (this.$route.params.id) {
                this.breadcrumbs[2].text = 'ویرایش دسته بندی';
                this.isEditing = true;
                axios.get(`/api/admin/categories/${this.$route.params.id}`)
                    .then(({ data }) => {
                        this.form.title = data.title;
                    });
            }
        },

        methods: {
            save() {
                if (this.$refs.createCategory.validate()) {
                    axios[this.requestType](this.requestUrl, this.form)
                        .then(() => {
                            this.$router.push({ name: 'admin-category-index' });
                        });
                }
            }
        }
    }
</script>

<style scoped>

</style>
