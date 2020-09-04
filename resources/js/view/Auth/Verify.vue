<template>
    <v-container fluid class="pa-0 ma-0" :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
        <v-row :class="$vuetify.breakpoint.mdAndUp ? 'h-100' : 'h-40'">
            <auth-banner :md="4"></auth-banner>
            <v-col cols="12" md="8" class="d-flex flex-column align-center justify-center text-center">
                <p class="blue--text headline font-weight-bold">به وب آموز خوش آمدید، اینجا شروع دوران جدید نوشتن شما است.</p>
                <p class="subtitle font-weight-bold">برای اتمام مراحل ثبت نام با مراجعه به ایمیل خود بر روی لینک فعال سازی کلیک کنید.</p>
                <v-btn :to="{ name: 'home' }"
                       color="info"
                       class="mt-12"
                       rounded
                >ورود به صفحه اصلی</v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    import AuthBanner from '@/components/auth/AuthBanner'
    export default {
        name: "Verify",
        metaInfo: {
            title: 'صفحه تایید حساب کاربری - وبلاگ وب آموز'
        },
        components: {
            AuthBanner
        }
    }
</script>

<style scoped>

</style>
