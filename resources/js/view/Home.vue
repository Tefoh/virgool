<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12"
                       :md="index === 0 || index === 3 ? 8 : 4"
                       v-for="(featurePost, index) in featurePosts"
                       :key="featurePost.post.slug"
                >
                    <related-post :data="featurePost.post"></related-post>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="12" md="8">
                    <span class="blue--text subtitle">جدیدترین نوشته ها</span>
                    <template v-for="post in posts.data">
                        <new-post :key="post.slug"
                                  :data="post"
                                  class="mt-10 mb-5"
                        ></new-post>
                        <v-divider></v-divider>
                    </template>
                    <div class="d-flex justify-center">
                        <v-btn @click="fetchNewPosts"
                               v-if="!! posts.next_page_url"
                               class="mt-5"
                        >
                            پست های بیشتر
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="4" class="hidden-sm-and-down">
                    <v-banner sticky
                    >
                        <following-posts></following-posts>
                        <popular-posts></popular-posts>
                    </v-banner>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import RelatedPost from "@/components/posts/RelatedPost";
    import NewPost from "@/components/posts/NewPost";
    import PopularPosts from "@/components/posts/PopularPosts";
    import FollowingPosts from "@/components/posts/FollowingPosts";
    import { ref } from '@vue/composition-api';

    export default {
        name: "Home",
        metaInfo: {
            title: 'صفحه اصلی -',
        },

        components: {
            PopularPosts,
            FollowingPosts,
            NewPost,
            RelatedPost,
        },

        setup() {
            // state
            const posts = ref({});
            const featurePosts = ref({});

            // methods
            const fetchNewPosts = () => {
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.data.push(
                            ...data.posts.data
                        );
                        posts.value.next_page_url = data.posts.next_page_url;
                    })
            };

            // created hook
            axios.get('/api/home')
                .then(({ data }) => {
                    posts.value = data.posts;
                });
            axios.get('/api/feature-posts')
                .then(({ data }) => {
                    featurePosts.value = data.data;
                });

            return {
                posts,
                featurePosts,
                fetchNewPosts
            }
        }
    }
</script>

<style>
 .v-toolbar__content {
     padding: 0 !important;
 }
</style>
