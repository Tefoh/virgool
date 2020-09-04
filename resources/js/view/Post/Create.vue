<template>
    <v-container>
        <v-row>
            <v-col>
                <v-form class="editor">
                    <v-text-field placeholder="عنوان متن"
                                  v-model="title"
                                  @input="updateDraft"
                    ></v-text-field>
                    <tiptap-editor v-model="content"
                                   @input="updateDraft"
                                   ref="tiptap"
                    ></tiptap-editor>
                    <v-btn color="info"
                           class="mt-10"
                           v-if="showSavingDraft"
                           @click.stop="saveDraft"
                    >
                        ذخیره پیش نویس
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbars.saved"
                    :timeout="1000"
                    color="info"
        >
            پیش نویس شما به درستی ذخیره شد
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
            پیش نویس شما متاسفانه ذخیره نشد
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
        name: "Create",
        metaInfo: {
            title: 'ساخت پست جدید -'
        },
        components: {
            TiptapEditor
        },
        setup(props, { root, refs }) {
            const title = ref('');
            const content = ref('');
            const requestType =  ref('post');
            const requestURI = ref('/api/posts/create');
            const snackbars = reactive({
                saved: false,
                error: false,
            });

            const showSavingDraft = computed(() => {
                return title.value && content.value;
            })

            let link = root.$route.params.link;
            if(link) {
                requestType.value = 'patch';
                requestURI.value = '/api/drafts/' + link;
                axios.get(`/api/drafts/${link}`)
                    .then(({ data }) => {
                        title.value = data.title;
                        content.value = data.content;
                        refs.tiptap.editor.setContent(data.content);
                    })
            }


            const setContent = (event) =>  {
                content.value = event
            };
            const updateDraft = debounce(function () {
                updateDraftStore()
                    .then(({ data }) => {
                        if(requestType.value === 'post') {
                            history.replaceState({}, '', data.link);
                            requestURI.value = `/api${data.link}`
                        }
                        requestType.value = 'patch';
                        snackbars.saved = true;
                    }).catch(() => {
                        snackbars.error = true
                    })
            }, 2000);

            const saveDraft = () => {
                updateDraft.cancel();
                updateDraftStore()
                    .then(({ data }) => {
                        root.$router.push(`${data.link}/save`)
                    })
            };

            const updateDraftStore = () => {
                return root.$store.dispatch('draft/saveDraft', {
                    requestType: requestType.value,
                    requestURI: requestURI.value,
                    title: title.value,
                    content: content.value,
                })
            };

            return {
                title,
                content,
                requestType,
                requestURI,
                snackbars,
                setContent,
                updateDraft,
                showSavingDraft,
                saveDraft
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
