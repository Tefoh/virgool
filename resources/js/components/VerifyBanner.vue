<template>
    <v-system-bar height="50px"
                  class="d-flex justify-center">
        <span>شما هنوز ایمیل خود را تایید نکرده اید</span>
        <span class="mr-5 success--text"
              v-if="sended"
        >ایمیل ارسال شد!</span>
        <v-btn class="mr-5"
               text
               outlined
               rounded
               small
               @click="resendVerify"
               v-else
        >
            ارسال مجدد ایمیل
        </v-btn>
    </v-system-bar>
</template>

<script>
    import { ref } from '@vue/composition-api'

    export default {
        name: "VerifyBanner",
        setup() {
            const sended = ref(false);

            function resendVerify() {
                axios.post('/api/email/resend')
                    .then(() => sended.value = true)
            }

            return {
                sended,
                resendVerify
            }
        },
    }
</script>

<style scoped>

</style>
