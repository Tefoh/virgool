<template>
    <v-main>
        <v-container v-if="posts.data">
            <v-row class="d-flex justify-center">
                <v-col cols="8" class="d-flex">
                    <div class="d-flex flex-row align-center">
                        <v-img :src="user.profile_src"
                               max-width="75px"
                        ></v-img>
                        <p class="title mr-5">{{ user.name }}</p>
                        <v-btn :color="user.is_follows ? 'info' : 'grey'"
                               rounded
                               dark
                               small
                               class="darken-2 px-5 mr-3 mb-3"
                               @click="followUser"
                               v-if="$store.state.user.isLoggedIn && user.id !== $store.state.user.user.id"
                        >
                            {{ user.is_follows ? 'دنبال میکنید' : 'دنبال کنید' }}
                        </v-btn>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <p>تعداد نوشته های مربوطه: {{ user.posts_count }}</p>
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
                    <span v-if="!posts.data.length">این کاربر هیچ پستی ندارد!</span>
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
        name: "UserPosts",

        components: {
            NewPost
        },

        metaInfo() {
            return {
                title: `پست های کاربر ${this.user.name}`
            }
        },

        setup(props, { root }) {
            // state
            const posts = ref({});
            const user = ref({});

            // methods
            const fetchNextPosts = () => {
                axios.get(posts.value.next_page_url)
                    .then(({ data }) => {
                        posts.value.next_page_url = data.posts.next_page_url;
                        posts.value.data.push(...data.posts.data);
                    });
            };
            const followUser = () => {
                axios.post(`/api/follows/${user.value.username}`)
                    .then(() => {
                        user.value.is_follows = !user.value.is_follows;
                    })
            };

            // created hook
            axios.get(`/api/user-posts/${root.$route.params.username}`)
                .then(({ data }) => {
                    user.value = data.user;
                    posts.value = data.posts;
                });

            return {
                posts,
                user,
                followUser,
                fetchNextPosts
            }
        }
    }
</script>

<style scoped>

</style>
