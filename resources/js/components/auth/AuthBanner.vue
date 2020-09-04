<template>
    <v-col cols="12" :md="md" class="gra-bg d-flex flex-column align-center justify-center">
        <v-img src="/images/logo.png"
               max-height="100px"
               :max-width="$vuetify.breakpoint.mdAndUp ? '100%' : '300px'"
        ></v-img>
        <span class="white--text font-weight-bold"
              :class="$vuetify.breakpoint.mdAndUp ? 'mt-10 display-1' : 'title'"
        >به وب اموز خوش امدید</span>
        <span class="mt-3 font-weight-bold hidden-sm-and-down text-center mx-5">همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی خودت را شروع کن.</span>
    </v-col>
</template>

<script>
    export default {
        name: "AuthBanner",
        props: {
            md: {
                type: Number,
                default: 8
            }
        }
    }
</script>

<style scoped>

</style>
