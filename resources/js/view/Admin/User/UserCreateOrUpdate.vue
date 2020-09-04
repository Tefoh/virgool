<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12" class="mt-10">
                    <p class="headline">{{ isEditing ? 'ویرایش کاربر' : 'ساخت کاربر' }}</p>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                    <v-form ref="createUser" class="mt-10">
                        <v-text-field name="name"
                                      label="نام"
                                      outlined
                                      v-model="form.name"
                                      :rules="[
                                          required('این فیلد الزامیست')
                                      ]"
                        ></v-text-field>
                        <v-text-field name="username"
                                      label="نام کاربری"
                                      outlined
                                      v-model="form.username"
                                      :rules="[
                                          required('این فیلد الزامیست')
                                      ]"
                                      :error-messages="errors.username"
                        ></v-text-field>
                        <v-text-field name="email"
                                      label="ایمیل"
                                      outlined
                                      v-model="form.email"
                                      :rules="[
                                          required('این فیلد الزامیست'),
                                          verifyEmail()
                                      ]"
                                      :error-messages="errors.email"
                        ></v-text-field>
                        <v-text-field name="password"
                                      label="رمزعبور"
                                      outlined
                                      v-model="form.password"
                                      :rules="passwordRule"
                        ></v-text-field>

                        <p>نقش های کاربر</p>
                        <div class="d-flex flex-row">
                            <v-checkbox v-model="form.roles"
                                        v-for="role in roles"
                                        :key="role.name"
                                        :value="role.id"
                                        :label="role.name"
                                        class="ml-9"
                            ></v-checkbox>
                        </div>

                        <v-btn color="info"
                               @click="save"
                        >{{ isEditing ? 'ویرایش' : 'ذخیره' }}</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import { required, verifyEmail } from "@/rules";

    export default {
        name: "UserCreateOrUpdate",

        metaInfo() {
            return {
                title: this.isEditing ? 'ویرایش کاربر' : 'ساخت کاربر'
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
                        text: 'مدیریت کاربران',
                        disabled: false,
                        to: { name: 'admin-user-index' },
                        exact: true
                    },
                    {
                        text: 'ساخت کاربر',
                        disabled: true,
                        to: { name: 'admin-user-create' },
                        exact: true
                    },
                ],
                form: {
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    roles: [],
                },
                errors: {
                    username: null,
                    email: null,
                },
                required,
                verifyEmail,
                isEditing: false,
                passwordRule: [],
                roles: []
            }
        },

        computed: {
            requestType() {
                return this.isEditing ? 'patch' : 'post';
            },
            requestUrl() {
                return this.isEditing ? `/api/admin/users/${this.$route.params.id}` : '/api/admin/users';
            },
        },

        created() {
            axios.get('/api/admin/all-roles')
                .then(({ data }) => {
                    this.roles = data;
                });

            if (this.$route.params.id) {
                this.isEditing = true;
                this.breadcrumbs[2].text = 'ویرایش کاربر';

                axios.get(`/api/admin/users/${this.$route.params.id}`)
                    .then(({ data }) => {
                        this.form.id = data.id;
                        this.form.name = data.name;
                        this.form.username = data.username;
                        this.form.email = data.email;
                        this.form.roles = data.all_roles_id;
                    })
            } else {
                this.passwordRule = [required('این فیلد الزامیست')];
            }
        },

        methods: {
            save() {
                this.errors = {
                    username: null,
                    email: null,
                };
                if (this.$refs.createUser.validate()) {
                    axios[this.requestType](this.requestUrl, this.form)
                        .then(() => {
                            this.$router.push({ name: 'admin-user-index' });
                        }).catch(({ response }) => {
                            if (response.data.errors.email) {
                                this.errors.email = response.data.errors.email[0];
                            }
                            if (response.data.errors.username) {
                                this.errors.username = response.data.errors.username[0];
                            }
                        })
                }
            }
        }
    }
</script>

<style scoped>

</style>
