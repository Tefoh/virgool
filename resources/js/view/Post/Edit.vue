<template>
    <v-container>
        <v-row>
            <v-col>
                <v-form class="editor">
                    <v-text-field placeholder="عنوان متن"
                                  v-model="title"
                                  @input="updatePost"
                    ></v-text-field>
                    <tiptap-editor v-model="content"
                                   @input="updatePost"
                                   ref="tiptap"
                    ></tiptap-editor>
                    <v-btn color="info"
                           class="mt-10"
                           v-if="showSavingPost"
                           @click.stop="savePost"
                    >
                        ویرایش نوشته
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbars.saved"
                    :timeout="1000"
                    color="info"
        >
            نوشته شما به درستی ویرایش شد
            <v-btn text
                   @click.stop="snackbars.saved = false"
            >
                بستن
            </v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbars.error"
                    :timeout="0"
                    color="error"
        >
            نوشته شما متاسفانه ویرایش نشد
            <v-btn text
                   @click.stop="snackbars.error = false"
            >
                بستن
            </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
    import TiptapEditor from "@/components/TiptapEditor";
    import { debounce } from 'lodash';
    import { ref, reactive, computed } from '@vue/composition-api';

    export default {
        name: "Edit",
        metaInfo: {
            title: 'ویرایش پست -'
        },
        components: {
            TiptapEditor
        },
        setup(props, { root, refs }) {
            const title = ref('');
            const content = ref('');
            const snackbars = reactive({
                saved: false,
                error: false,
            });

            const showSavingPost = computed(() => {
                return title.value && content.value;
            });

            axios.get(`/api/posts/${root.$route.params.slug}/edit`)
                .then(({ data }) => {
                    title.value = data.title;
                    content.value = data.content;
                    refs.tiptap.editor.setContent(data.content);
                });


            const setContent = (event) =>  {
                content.value = event
            };
            const updatePost = debounce(function () {
                updatePostStore()
                    .then(({ data }) => {
                        snackbars.saved = true;
                    }).catch(() => {
                        snackbars.error = true
                    })
            }, 2000);

            const savePost = () => {
                updatePost.cancel();
                updatePostStore()
                    .then(({ data }) => {
                        root.$router.push(`/posts/${root.$route.params.slug}/update`)
                    })
            };

            const updatePostStore = () => {
                return root.$store.dispatch('post/updatePost', {
                    title: title.value,
                    content: content.value,
                    slug: root.$route.params.slug
                })
            };

            return {
                title,
                content,
                snackbars,
                setContent,
                updatePost,
                showSavingPost,
                savePost
            }
        }
    }
</script>

<style lang="scss">
    .editor {
        position: relative;

        &__floating-menu {
            position: absolute;
            z-index: 1;
            margin-top: -0.25rem;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.2s, visibility 0.2s;

            &.is-active {
                opacity: 1;
                visibility: visible;
            }
        }
    }
    .editor p.is-editor-empty:first-child::before {
        content: attr(data-empty-text);
        float: right;
        color: #aaa;
        pointer-events: none;
        height: 0;
        font-style: italic;
    }
</style>
