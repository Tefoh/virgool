<template>
    <v-container fluid class="pa-0 ma-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
            <auth-banner></auth-banner>
            <v-col cols="12" md="4" class="d-flex align-end">
                <v-form class="w-100 mx-5"
                        ref="loginForm"
                >
                    <span class="blue--text font-weight-bold">ورود به حساب کاربری</span>
                    <v-text-field label="نام کاربری یا ایمیل"
                                  outlined
                                  rounded
                                  class="mt-9"
                                  :rules="[
                                      required('این فیلد الزامیست')
                                  ]"
                                  :error-messages="errors.email"
                                  v-model="form.email"
                    ></v-text-field>
                    <v-text-field label="رمز عبور"
                                  outlined
                                  rounded
                                  type="password"
                                  :rules="[
                                      required('رمز عبور الزامیست')
                                  ]"
                                  :error-messages="errors.password"
                                  v-model="form.password"
                    ></v-text-field>
                    <div class="d-flex">
                        <router-link :to="{ name: 'reset-email-password' }" class="body-2">فراموشی رمز عبور</router-link>
                        <v-spacer></v-spacer>
                        <v-btn color="info"
                               class="px-6"
                               rounded
                               @click="login"
                        >
                            <template v-if="! loading">
                                ورود به حساب کاربری <v-icon class="mr-2">mdi-chevron-left</v-icon>
                            </template>
                            <template v-else>
                                <v-progress-circular color="white"
                                                     :indeterminate="true"
                                ></v-progress-circular>
                            </template>

                        </v-btn>
                    </div>
                    <div class="d-flex flex-column align-center justify-center mt-9 body-2 grey--text">
                        <span class="mt-6">ورود با اکانت گوگل</span>
                        <span class="mt-6">ثبت نام در ویرگول به منزله موافقت با قوانین است</span>
                        <router-link :to="{ name: 'register' }" class="my-6">عضو نیستید؟ ثبت نام از طریق آدرس ایمیل</router-link>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import AuthBanner from '@/components/auth/AuthBanner';
    import { required } from '@/rules';
    import { loginModule } from "@/module/auth/loginModule";

    export default {
        name: "Login",
        metaInfo: {
            title: 'صفحه ورود - وبلاگ وب آموز'
        },
        components: {
            AuthBanner
        },
        setup() {

            return {
                required,
                ...loginModule()
            }
        },
    }
</script>

<style scoped>
</style>
