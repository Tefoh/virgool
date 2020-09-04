<template>
    <v-container fluid class="pa-0 ma-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
            <auth-banner></auth-banner>
            <v-col cols="12" md="4" class="d-flex align-end">
                <v-form class="w-100 mx-5"
                        ref="registerForm"
                >
                    <span class="blue--text font-weight-bold">ایجاد حساب کاربری</span>
                    <v-text-field label="ایمیل"
                                  outlined
                                  rounded
                                  class="mt-9"
                                  :rules="[
                                      lessThan(255, 'ایمیل'),
                                      verifyEmail()
                                  ]"
                                  :error-messages="errors.email"
                                  v-model="form.email"
                    ></v-text-field>
                    <v-text-field label="رمز عبور"
                                  outlined
                                  rounded
                                  type="password"
                                  :error-messages="errors.password"
                                  :rules="[
                                      moreThan(8, 'رمز عبور')
                                  ]"
                                  v-model="form.password"
                    ></v-text-field>
                    <div class="d-flex">
                        <v-spacer></v-spacer>
                        <v-btn color="info"
                               class="px-6"
                               rounded
                               @click="register"
                        >
                            <template v-if="loading">
                                <v-progress-circular color="white"
                                                     :indeterminate="true"
                                ></v-progress-circular>
                            </template>
                            <template v-else>
                                ایجاد حساب کاربری <v-icon class="mr-2">mdi-chevron-left</v-icon>
                            </template>
                        </v-btn>
                    </div>
                    <div class="d-flex flex-column align-center justify-center mt-9 body-2 grey--text">
                        <span class="mt-6">ورود با اکانت گوگل</span>
                        <span class="mt-6">ثبت نام در ویرگول به منزله موافقت با قوانین است</span>
                        <router-link :to="{ name: 'login' }" class="my-6">قبلا عضو شده اید؟ رفتن به صفحه ورود</router-link>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AuthBanner from "@/components/auth/AuthBanner";
    import {
        required,
        moreThan,
        lessThan,
        verifyEmail
    } from "@/rules";

    import { registerModule } from "@/module/auth/registerMudole";

    export default {
        name: "Register",
        metaInfo: {
            title: 'صفحه ثبت نام - وبلاگ وب آموز'
        },
        components: {
            AuthBanner
        },

        setup() {
            return {
                required,
                verifyEmail,
                lessThan,
                moreThan,
                ...registerModule()
            }
        },
    }
</script>

<style scoped>
</style>
