<template>
    <v-container fluid class="pa-0 ma-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
            <auth-banner></auth-banner>
            <v-col cols="12" md="4" class="d-flex align-center">
                <v-form class="w-100 mx-5"
                        ref="resetPassword"
                >
                    <span class="blue--text font-weight-bold">
                        رمز عبور جدید خود را وارد نمایید
                    </span>
                    <v-text-field label="ایمیل"
                                  outlined
                                  rounded
                                  class="mt-9"
                                  :rules="[
                                      required('ایمیل الزامیست'),
                                      verifyEmail()
                                  ]"
                                  :error-messages="errors.email"
                                  v-model="form.email"
                    ></v-text-field>

                    <v-text-field label="رمز عبور"
                                  outlined
                                  rounded
                                  type="password"
                                  :rules="[
                                      moreThan(8, 'رمز عبور'),
                                  ]"
                                  :error-messages="errors.password"
                                  v-model="form.password"
                    ></v-text-field>
                    <v-text-field label="تایید رمز عبور"
                                  outlined
                                  rounded
                                  type="password"
                                  :rules="[
                                      moreThan(8, 'تایید رمز عبور'),
                                  ]"
                                  :error-messages="errors.password_confirmation"
                                  v-model="form.password_confirmation"
                    ></v-text-field>

                    <div class="d-flex flex-row">
                        <v-spacer></v-spacer>
                        <v-btn color="info"
                               class="px-6"
                               rounded
                               @click="changePassword"
                        >
                            <template v-if="loading">
                                <v-progress-circular color="white"
                                                     :indeterminate="true"
                                ></v-progress-circular>
                            </template>
                            <template v-else>
                                تغییر رمز عبور
                                <v-icon class="mr-2">mdi-chevron-left</v-icon>
                            </template>
                        </v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AuthBanner from "@/components/auth/AuthBanner";
    import { required, verifyEmail, moreThan } from "@/rules";
    import { ref  } from '@vue/composition-api';

    export default {
        name: "ResetPassword",
        metaInfo: {
            title: 'صفحه بازیابی رمز عبور - وبلاگ وب آموز'
        },
        components: {
            AuthBanner
        },
        setup(props, { refs, root }) {

            const form = ref({
                token: root.$route.params.token,
                email: null,
                password: null,
                password_confirmation: null,
            });
            const errors = ref({
                email: null,
                password: null,
                password_confirmation: null,
            });
            const loading = ref(false);


            function changePassword() {

                if(refs.resetPassword.validate()) {
                    loading.value = true;
                    root.$store.dispatch('user/resetPassword', form.value)
                        .then(() => {
                            root.$router.push({ name: 'home' })
                        })
                        .catch((error) => {
                            errors.value.email = error.response.data.errors.email[0]
                        })
                        .finally(() => loading.value = false)
                }
            }

            return {
                required,
                verifyEmail,
                moreThan,
                form,
                errors,
                loading,
                changePassword
            }
        }
    }
</script>

<style scoped>

</style>
