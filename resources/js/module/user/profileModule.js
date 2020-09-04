import {computed, ref} from "@vue/composition-api";
import uploadBase64 from "@/module/file/uploadBase64";
import store from '@/store';

export default function profile() {
    const form = ref(null);
    // state
    const user = ref(null);
    const editing = ref({
        username: false,
        email: false,
    });
    const old = ref({
        username: false,
        email: false,
    });
    const errors = ref({
        email: null,
        username: null
    });

    // computed
    const url = computed(() => {
        return process.env.MIX_APP_URL + '/';
    });
    const fullUsername = computed(() => {
        return url.value + user.value.username;
    });

    // methods
    const getUser = () => {
        axios.get('/api/me')
            .then(({ data }) => {
                user.value = data;
                old.value.username = data.username;
                old.value.email = data.email;
            })
    };
    const cancel = (data) => {
        user.value[data] = old.value[data];
        editing.value[data] = false
    };
    const changeEdit = (data) => {
        old.value[data] = user.value[data];
        editing.value[data] = ! editing.value[data]
    };
    const uploadProfile = (event) => {
        user.value.profile_name = event.target.files[0].name;
        user.value.profile_src = user.value.profile = uploadBase64(event);
    };
    const update = () => {
        if (form.value.validate()) {
            axios.patch('/api/profile', user.value)
                .then(({ data }) => {
                    store.dispatch('user/changeName', data.name);
                    errors.value = {
                        email: null,
                        username: null,
                    };
                    editing.value = {
                        email: false,
                        username: false,
                    }
                })
                .catch(({ response }) => {

                    for (const index in response.data.errors) {
                        errors.value[index] = response.data.errors[index][0];
                        editing.value[index] = true
                    }

                })
        }
    }

    // created hook
    getUser();

    return {
        errors,
        form,
        user,
        editing,
        old,
        url,
        fullUsername,
        getUser,
        cancel,
        changeEdit,
        uploadProfile,
        update,
    }
}
