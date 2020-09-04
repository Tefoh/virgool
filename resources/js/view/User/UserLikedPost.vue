<template>
    <v-main>
        <v-container v-if="posts.data">
            <v-row class="d-flex justify-center">
                <v-col cols="8" class="d-flex">
                    <div>
                        <p>نوشته هایی شما لایک کردین</p>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <p>تعداد نوشته های مربوطه: {{ user.likes_count }}</p>
                        <p></p>
                    </div>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-col cols="8">
                    <new-post v-for="post in posts.data"
                              :data="post"
                              :key="post.slug"
                              class="mt-10"
                    ></new-post>
                    <span v-if="!posts.data.length">شما هیچ نوشته ای را لایک نکرده اید!</span>
                    <v-btn class="mt-10"
                           v-if="!! posts.next_page_url"
                           @click="fetchNextPosts"
                    >صفحه بعدی</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import NewPost from "@/components/posts/NewPost";
    import { ref } from '@vue/composition-api';

    export default {
        name: "PostCategory",
        components: {
            NewPost
        },

        metaInfo: {
            title: 'نوشته های مورد پسند من'
        },

        setup() {
            // state
            const posts = ref({});
            const user = ref({});

            // methods
            const fetchNextPosts = () => {
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.data.push(...data.posts.data);
                        posts.value.next_page_url = data.posts.next_page_url;
                    });
            };

            // created hook
            axios.get(`/api/liked-posts`)
                .then(({ data }) => {
                    posts.value = data.posts;
                    user.value = data.user;
                });

            return {
                posts,
                user,
                fetchNextPosts
            }
        }
    }
</script>

<style scoped>

</style>
