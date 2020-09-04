<template>
    <v-main>
        <v-container v-if="post.user">
            <v-row class="d-flex justify-center">
                <v-col cols="12" md="8">
                    <v-list-item>
                        <v-list-item-avatar size="80">
                            <v-avatar size="80">
                                <v-img :src="post.user.profile_src"
                                ></v-img>
                            </v-avatar>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-bold">
                                {{ post.user.name }}
                                <v-btn :color="post.user.is_follows ? 'info' : 'grey'"
                                       rounded
                                       dark
                                       small
                                       class="darken-2 px-5 mr-3 mb-3"
                                       @click="followUser"
                                       v-if="$store.state.user.isLoggedIn && post.user.id !== $store.state.user.user.id"
                                >
                                    {{ post.user.is_follows ? 'دنبال میکنید' : 'دنبال کنید' }}
                                </v-btn>
                            </v-list-item-title>
                            <v-list-item-subtitle class="body-2 grey--text">
                                ‌‌‌‌{{ post.user.bio }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class="caption grey--text">
                                {{ moment(post.created_at).fromNow() }} / خواندن {{ post.min_read }} دقیقه
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <div class="my-5">
                        <h1 class="title">{{ post.title }}</h1>
                    </div>

                    <div class="mt-10">
                        <v-img :src="post.image"
                        ></v-img>
                    </div>
                    <div class="mt-12" v-html="post.content">
                    </div>

                    <div class="my-10">
                        <v-btn depressed
                               v-for="category in post.categories"
                               :key="category.slug"
                               class="mr-3 mt-2"
                               :to="{ name: 'post-category', params: { slug: category.slug } }"
                        >{{ category.title }}</v-btn>
                    </div>

                    <div class="d-flex flex-row mb-5">
                        <span class="ml-5" @click="bookmarkPost(post)" v-if="$store.state.user.isLoggedIn">
                            <v-icon>
                                {{ post.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}
                            </v-icon>
                        </span>
                        <span class="ml-5">
                            <v-icon :class="{ 'red--text': post.is_liked }"
                                    @click="likePost"
                                    v-if="$store.state.user.isLoggedIn"
                            >
                                {{ post.is_liked ? 'mdi-heart' : 'mdi-heart-outline' }}
                            </v-icon>
                            <v-icon v-else>mdi-heart-outline</v-icon>
                            {{ post.likes_count }}
                        </span>
                        <span class="ml-5">
                            <v-icon>mdi-comment-outline</v-icon>
                            {{ post.comments_count }}
                        </span>
                        <v-spacer></v-spacer>
                        <v-icon>mdi-telegram</v-icon>
                        <v-btn outlined
                               rounded
                               class="mr-3"
                               v-clipboard:copy="short_link"
                               v-clipboard:success="onCopyShortLink"
                               :disabled="short_link === 'کپی شد!!!'"
                        >{{ short_link }}</v-btn>
                    </div>

                    <v-divider></v-divider>

                    <div class="mt-12">
                        <p class="body-2 font-weight-bold">شاید از این نوشته‌ها هم خوشتان بیاید</p>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12"
                                       md="4"
                                       v-for="related_post in related_posts"
                                       :key="related_post.slug"
                                >
                                    <v-card>
                                        <router-link :to="{ name: 'post-show', params: { slug: related_post.slug } }">
                                            <v-img :src="related_post.image"
                                            ></v-img>
                                        </router-link>
                                        <v-card-title>
                                            <router-link :to="{ name: 'post-show', params: { slug: related_post.slug } }">
                                                {{ related_post.title }}
                                            </router-link>
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-list-item :to="{ name: 'user-posts', params: { username: related_post.user.username } }">
                                                <v-list-item-avatar>
                                                    <v-avatar>
                                                        <v-img :src="related_post.user.profile_src"
                                                        ></v-img>
                                                    </v-avatar>
                                                </v-list-item-avatar>
                                                <v-list-item-content>
                                                    <v-list-item-title class="body-2 font-weight-bold d-inline-block text-truncate"
                                                                       style="max-width: 100px;"
                                                    >
                                                        {{ related_post.user.name }}
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle class="caption grey--text">
                                                        {{ related_post.min_read }}
                                                        ‌‌‌‌خواندن
                                                    </v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>

                                            <v-spacer></v-spacer>

                                            <v-icon @click="bookmarkPost(related_post)"
                                                    v-if="$store.state.user.isLoggedIn"
                                            >
                                                {{ related_post.is_bookmarked ? 'mdi-bookmark' : 'mdi-bookmark-outline' }}
                                            </v-icon>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>

                    <div class="mt-12">
                        <p>دیدگاه ها</p>
                        <template v-if="$store.state.user.isLoggedIn">
                            <v-textarea label="نظر خود را بنویسید"
                                        outlined
                                        filled
                                        v-model="comment.content"
                            ></v-textarea>
                            <div class="d-flex flex-row">
                                <v-spacer></v-spacer>
                                <v-btn color="success"
                                       large
                                       rounded
                                       @click="saveComment"
                                >ارسال دیدگاه</v-btn>
                            </div>
                        </template>
                        <template v-else>
                            <span>برای ارسال دیدگاه باید وارد سایت شوید.</span>
                        </template>
                    </div>
                    <post-comments v-for="comment in post.parent_comments"
                                   :key="comment.id"
                                   :data="comment"
                    ></post-comments>
                </v-col>
            </v-row>
        </v-container>
        <v-snackbar v-model="error.show"
                    color="error"
        >
            {{ error.message }}
        </v-snackbar>
    </v-main>
</template>

<script>
    import { ref } from '@vue/composition-api';
    import PostComments from "@/components/posts/PostComments";
    import EventBus from '@/Service/EventBus';

    moment.loadPersian({
        usePersianDigits: true
    });

    export default {
        name: "PostShow",
        components: {
            PostComments
        },
        metaInfo() {
            return {
                title: this.post.title,
                meta: [
                    { name: 'description', content: this.post.description }
                ]
            }
        },

        setup(props, { root: { $route } }) {
            // state
            const short_link = ref('');
            const post = ref({});
            const related_posts = ref({});
            const comment = ref({
                content: '',
                post_id: null
            });
            const error = ref({
                show: false,
                message: null
            });

            // methods
            const onCopyShortLink = () => {
                const link = short_link.value;
                short_link.value = 'کپی شد!!!';
                setTimeout(() => {
                    short_link.value = link;
                }, 1500);
            };
            const saveComment = () => {
                axios.post(`/api/comments/${post.value.slug}`, comment.value)
                    .then(({ data }) => {
                        comment.value.content = null;
                    }).catch(({ response }) => {
                        showErrorSnackbar(response.data.errors.content[0]);
                    })
            };
            const showErrorSnackbar = (message) => {
                error.value.show = true;
                error.value.message = message;
            };
            const bookmarkPost = (postModel) => {
                postModel.is_bookmarked = !postModel.is_bookmarked;
                let reqType = postModel.is_bookmarked ? 'post' : 'delete';
                axios[reqType](`/api/bookmarks/${postModel.slug}`);
            };
            const likePost = () => {
                post.value.is_liked = !post.value.is_liked;
                let reqType = post.value.is_liked ? 'post' : 'delete';
                axios[reqType](`/api/likes/${post.value.slug}`)
                    .then(() => {
                        post.value.is_liked ? post.value.likes_count++ : post.value.likes_count--;
                    })
            };
            const followUser = () => {
                axios.post(`/api/follows/${post.value.user.username}`)
                    .then(() => {
                        post.value.user.is_follows = !post.value.user.is_follows;
                    })
            };

            // created hook
            axios.get(`/api/posts/${$route.params.slug}`)
                .then(({ data }) => {
                    post.value = data.post;
                    related_posts.value = data.related_posts;
                    short_link.value = `http://blog.test/link/${data.post.short_link}`;

                    comment.value.post_id = data.post.id;

                    Echo.channel(`virgool_comment_${data.post.id}`)
                        .listen('.comment.created', ({ comment }) => {
                            post.value.parent_comments.push(comment);
                            EventBus.$emit('comment_created');
                        });

                    Echo.channel(`virgool_comment_${data.post.id}`)
                        .listen('CommentDeletedEvent', ({ comment }) => {
                            post.value.parent_comments = post.value.parent_comments.filter(c => c.id !== comment.id);
                            EventBus.$emit('comment_deleted');
                        });
                });
            EventBus.$on('error', (message) => {
                showErrorSnackbar(message);
            });
            EventBus.$on('comment_created', () => {
                post.value.comments_count++;
            });
            EventBus.$on('comment_deleted', () => {
                post.value.comments_count--;
            });

            return {
                post,
                related_posts,
                bookmarkPost,
                likePost,
                followUser,
                moment,
                short_link,
                onCopyShortLink,
                comment,
                saveComment,
                error,
                showErrorSnackbar
            }
        }
    }
</script>

<style scoped>
    .body-text {
        text-align: justify;
        line-height: 2.3rem;
    }
</style>
