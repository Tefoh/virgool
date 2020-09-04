import { ref } from "@vue/composition-api";
import store from '@/store';
import router from "@/router/router";

export function loginModule() {
    /** state */
    const loginForm = ref(null);
    const form = ref({
        email: null,
        password: null,
        remember: true,
    });
    const errors = ref({
        email: null,
        password: null,
    });
    const loading = ref(false);

    /** methods */
    function login() {
        if(loginForm.value.validate()) {
            loading.value = true;
            store.dispatch('user/login', form.value)
                .then(() => {
                    router.push({ name: 'home' })
                })
                .catch(({ response }) => {
                    errors.value.email = response.data.errors.email[0]
                    errors.value.password = response.data.errors.password[0]
                })
                .finally(() => loading.value = false)
        }
    }

    return {
        loginForm,
        errors,
        form,
        login,
        loading
    };
}
