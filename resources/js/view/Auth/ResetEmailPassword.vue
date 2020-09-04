<template>
    <v-container fluid class="pa-0 ma-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
            <auth-banner></auth-banner>
            <v-col cols="12" md="4" class="d-flex align-center">
                <v-form class="w-100 mx-5"
                        ref="resetPassword"
                >
                    <span class="blue--text font-weight-bold">
                        ایمیل خود را برای بازیابی رمز عبور وارد کنید
                    </span>
                    <template v-if="! sended">
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
                        <div class="d-flex flex-row">
                            <v-spacer></v-spacer>
                            <v-btn color="info"
                                   class="px-6"
                                   rounded
                                   @click="sendEmail"
                            >
                                <template v-if="loading">
                                    <v-progress-circular color="white"
                                                         :indeterminate="true"
                                    ></v-progress-circular>
                                </template>
                                <template v-else>
                                    ارسال ایمیل
                                    <v-icon class="mr-2">mdi-chevron-left</v-icon>
                                </template>
                            </v-btn>
                        </div>
                    </template>
                    <template v-else>
                        <p class="success--text">
                            ایمیل به ادرس نوشته شده ارسال شد!
                        </p>
                    </template>

                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AuthBanner from "@/components/auth/AuthBanner";
    import {required, verifyEmail} from "@/rules";
    import {ref} from '@vue/composition-api';

    export default {
        name: "ResetEmailPassword",
        metaInfo: {
            title: 'صفحه بازیابی رمز عبور - وبلاگ وب آموز'
        },
        components: {
            AuthBanner
        },
        setup(props, { refs, root }) {
            const form = ref({
                email: null
            });
            const errors = ref({
                email: null
            });
            const loading = ref(false);
            const sended = ref(false);

            function sendEmail() {
                if(refs.resetPassword.validate()) {
                    loading.value = true;
                    root.$store.dispatch('user/sendEmail', form.value)
                        .then(() => sended.value = true)
                        .catch((error) => {
                            errors.value.email = error.response.data.errors.email[0]
                        })
                        .finally(() => loading.value = false)
                }
            }

            return {
                required,
                verifyEmail,
                form,
                errors,
                loading,
                sendEmail,
                sended
            }
        }
    }
</script>

<style scoped>

</style>
