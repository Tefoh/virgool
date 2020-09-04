<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="mt-10 d-flex flex-row">
                        <span class="headline font-weight-bold">نوشته های شما</span>
                        <v-spacer></v-spacer>
                        <v-btn color="info"
                               outlined
                               :to="{ name: 'create-posts' }"
                        >نوشتن پست جدید</v-btn>
                    </div>

                    <v-tabs class="mt-5" color="grey darken-3" v-model="menu">
                        <v-tab href="#drafts"
                               @click="fetchAllDrafts"
                        >
                            پیش نویس ها
                            <template v-if="drafts_count">
                                ({{ drafts_count }})
                            </template>
                        </v-tab>
                        <v-tab href="#posts"
                               @click="fetchAllPosts"
                        >
                            مطالب منتشر شده
                            <template v-if="posts_count">
                                ({{ posts_count }})
                            </template>
                        </v-tab>
                    </v-tabs>
                    <v-divider></v-divider>

                    <v-tabs-items v-model="menu">
                        <v-tab-item value="drafts">
                            <div class="my-5" v-for="(draft, index) in drafts">
                                <router-link class="title"
                                             :to="{ name: 'update-draft', params: { link: draft.link } }"
                                >{{ draft.title || 'بدون عنوان' }}</router-link>
                                <div class="d-flex flex-row">
                                    <span class="body-2 grey--text">آخرین ویرایش: {{ draft.updated_at }}</span>
                                    <v-spacer></v-spacer>
                                    <router-link :to="{ name: 'update-draft', params: { link: draft.link } }">
                                        <v-icon class="info--text text--lighten-1 ml-5">mdi-file-document-edit</v-icon>
                                    </router-link>
                                    <v-icon class="red--text text--lighten-1"
                                            @click="openDeleteDraftDialog(index, draft.link)"
                                    >mdi-delete</v-icon>
                                </div>
                                <v-divider class="mt-5"></v-divider>
                            </div>
                            <v-dialog v-model="deleteDialogDraft"
                                      max-width="370px"
                                      persistent
                            >
                                <v-card>
                                    <v-card-title>
                                        آیا از حذف این پیش نویس مطمئن هستید؟
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn @click="cancelDeleteDraft">بستن</v-btn>
                                        <v-btn @click="deleteDraft"
                                               color="error"
                                        >تایید</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-tab-item>
                        <v-tab-item value="posts">
                            <div class="my-5" v-for="(post, index) in posts">
                                <router-link class="title"
                                             :to="{ name: 'post-show', params: { slug: post.slug } }"
                                >{{ post.title }}</router-link>
                                <div class="d-flex flex-row">
                                    <span class="body-2 grey--text">آخرین ویرایش: {{ post.updated_at }}</span>
                                    <v-spacer></v-spacer>
                                    <router-link
                                        :to="{ name: 'edit-posts', params: { slug: post.slug } }"
                                    >
                                        <v-icon class="info--text text--lighten-1 ml-5">mdi-file-document-edit</v-icon>
                                    </router-link>

                                    <v-icon class="red--text text--lighten-1"
                                            @click="openDeletePostDialog(index, post.slug)"
                                    >mdi-delete</v-icon>
                                </div>
                                <v-divider class="mt-5"></v-divider>
                            </div>
                            <v-dialog v-model="deleteDialogPost"
                                      max-width="370px"
                                      persistent
                            >
                                <v-card>
                                    <v-card-title>
                                        آیا از حذف این نوشته مطمئن هستید؟
                                    </v-card-title>
                                    <v-card-actions>
                                        <v-btn @click="cancelDeletePost">بستن</v-btn>
                                        <v-btn @click="deletePost"
                                               color="error"
                                        >تایید</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import { reactive, toRefs } from '@vue/composition-api';
    import postModule from "@/module/post/postModule";
    import draftModule from "@/module/post/draftModule";

    export default {
        name: "MyPosts",

        metaInfo: {
            title: 'نوشته های من -'
        },

        setup() {
            // state
            const data = reactive({
                menu: null,
            });

            const { fetchAllDrafts } = draftModule();

            // created hook
            fetchAllDrafts();

            return {
                ...toRefs(data),
                ...postModule(),
                ...draftModule(),
            }
        }
    }
</script>

<style scoped>

</style>
