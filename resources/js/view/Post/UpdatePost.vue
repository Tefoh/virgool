<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <p>عکس خود را اپلود کنید</p>
                <input type="file"
                       @change="uploadImage"
                >
                <v-img :src="form.image"
                       v-if="form.image"
                       width="300px"
                       height="300px"
                       class="mt-5"
                ></v-img>
                <p class="mt-3">{{ form.title }}</p>
                <v-textarea placeholder="توضیحات نوشته"
                            v-model="form.description"
                ></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
                <p>برای شناسایی بهتر نوشته تان دسته بندی ها را اضافه کنید</p>
                <v-combobox v-model="form.categories"
                            placeholder="دسته بندی ها"
                            multiple
                            chips
                            append-icon=""
                            hint="حداکثر 5 دسته بندی را اضافه کنید"
                            persistent-hint
                ></v-combobox>
                <div class="mt-5 d-flex flex-row">
                    <v-spacer></v-spacer>
                    <v-btn color="info"
                           @click="sendForm"
                    >
                        ذخیره نوشته
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-snackbar v-model="error.show"
                    v-for="(error, index) in errors"
                    :key="index"
                    color="error"
                    :timeout="0"
        >
            {{ error.text }}
            <v-btn @click="error.show = false"
                   text
            >x</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import { ref, reactive, watch } from '@vue/composition-api';
    import uploadBase64 from "@/module/file/uploadBase64";

    export default {
        name: "UpdatePost",
        setup(props, { root }) {
            // state
            const form = ref({
                image: null,
                image_name: null,
                title: null,
                content: null,
                description: null,
                categories: [],
            });
            const errors = ref([]);

            axios.get(`/api/posts/${root.$route.params.slug}/edit`)
                .then(({ data }) => {
                    form.value = data;
                    form.value.categories = data.categories_title;
                });

            watch(
                () => form.value.categories,
                (value) => {
                    if (value.length > 5) {
                        form.value.categories.pop()
                    }
                }
            );

            // methods
            const uploadImage = (event) => {
                form.value.image_name = event.target.files[0].name;
                form.value.image = uploadBase64(event);
            };
            const sendForm = () => {
                root.$store.dispatch('post/editPost', form.value)
                    .then(({ data }) => {
                        root.$router.push({ name: 'post-show', params: { slug: data.data.slug } })
                    })
                    .catch(({ response }) => {
                        Object.values(response.data.errors).forEach(e => {
                            errors.value.push({
                                text: e[0],
                                show: true,
                            })
                        })
                    })
            };

            return {
                form,
                errors,
                uploadImage,
                sendForm
            }
        }
    }
</script>

<style scoped>

</style>
