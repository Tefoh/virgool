<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="search"
                                  placeholder="متن جستجو"
                                  @keyup="searchItems"
                    ></v-text-field>

                    <v-divider></v-divider>

                    <v-tabs class="mt-5 grey darken-3" v-model="activeTab">
                        <v-tab href="#posts" @click.stop="goTo('posts')">پست ها</v-tab>
                        <v-tab href="#users" @click.stop="goTo('users')">کاربران</v-tab>
                        <v-tab href="#categories" @click.stop="goTo('categories')">دسته بندی ها</v-tab>
                        <v-tab href="#no-content" style="display: none;">no-content</v-tab>
                    </v-tabs>
                    <v-tabs-items v-model="activeTab">
                        <v-tab-item value="posts" v-if="activeTab === 'posts' && items.data">
                            <div class="mt-10"
                                 v-for="post in items.data"
                                 :key="post.slug"
                            >
                                <new-post :data="post"></new-post>
                                <v-divider></v-divider>
                            </div>
                            <v-btn @click="fetchNextItems"
                                   v-if="!! items.next_page_url"
                                   class="mt-5"
                            >بیشتر</v-btn>
                            <p class="mt-10"
                               v-if="! items.data.length"
                            >هیچ نوشته ای یافت نشد</p>
                        </v-tab-item>
                        <v-tab-item value="users" v-if="activeTab === 'users' && items.data">
                            <template v-for="(user, index) in items.data">
                                <div class="d-flex flex-row my-5"
                                     :key="user.username"
                                >
                                    <div>
                                        <router-link
                                            :to="{ name: 'user-posts', params: { username: user.username }}">
                                            <v-avatar>
                                                <v-img :src="user.profile_src"></v-img>
                                            </v-avatar>
                                        </router-link>
                                        <router-link
                                            :to="{ name: 'user-posts', params: { username: user.username }}">
                                            <span class="mr-5">{{ user.name }}</span>
                                        </router-link>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div>
                                        <v-btn color="info"
                                               :outlined="! user.is_follows"
                                               v-if="$store.state.user.isLoggedIn && user.id != $store.state.user.user.id"
                                               @click="followUser(index, user.username)"
                                        >{{ user.is_follows ? 'دنبال میکنید' : 'دنبال کردن' }}</v-btn>
                                    </div>
                                </div>
                                <v-divider></v-divider>
                            </template>
                            <v-btn @click="fetchNextItems"
                                   v-if="!! items.next_page_url"
                                   class="mt-5"
                            >بیشتر</v-btn>
                            <p class="mt-10"
                               v-if="! items.data.length"
                            >هیچ کاربری یافت نشد</p>
                        </v-tab-item>
                        <v-tab-item value="categories" v-if="activeTab === 'categories'">
                            <div class="mt-10">
                                <v-btn v-for="category in items"
                                       :key="category.slug"
                                       class="mr-3 mb-3"
                                       depressed
                                       :to="{ name: 'post-category', params: { slug: category.slug } }"
                                >
                                    {{ category.title }}
                                </v-btn>
                            </div>
                            <p class="mt-10"
                               v-if="! items.length"
                            >هیچ دسته بندی یافت نشد</p>
                        </v-tab-item>
                        <v-tab-item value="no-content">
                            <p class="mt-5">شما هیچ متنی را جستجو نکردید!</p>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
    import { ref } from '@vue/composition-api';
    import NewPost from "@/components/posts/NewPost";
    import { debounce } from 'lodash';

    export default {
        name: "Index",

        components: {
            NewPost
        },

        metaInfo() {
            return {
                title: 'جستجوی ' + this.$route.query.q + ' - '
            }
        },

        setup(props, { root }) {
            // state
            const search = ref(root.$route.query.q);
            const activeTab = ref(root.$route.params.type);
            const items = ref({});


            let pageType = root.$route.params.type;

            // methods
            const goTo = (type) => {
                root.$router.push({
                    name: 'search',
                    params: { type },
                    query: { q: search.value }
                });
            };
            const fetchItems = () => {
                if (search.value !== '') {
                    activeTab.value = root.$route.params.type;
                    axios.get(`/api/search/${pageType}?q=${search.value}`)
                        .then(({ data }) => {
                            items.value = data[pageType];
                        });
                }
            };
            const fetchNextItems = () => {
                axios.get(items.value.next_page_url)
                    .then(({ data }) => {
                        items.value.data.push(
                            ...data[pageType].data
                        );
                        items.value.next_page_url = data[pageType].next_page_url
                    });
            };
            const searchItems = debounce(function () {
                fetchItems();
            }, 500);
            const followUser = (index, username) => {
                axios.post(`/api/follows/${username}`)
                    .then(res => {
                        items.value.data[index].is_follows = !items.value.data[index].is_follows;
                    });
            };

            // created hook
            if (pageType !== 'posts' && pageType !== 'users' && pageType !== 'categories') {
                root.$router.push({ name: 'not-found' });
            }
            if (search.value === '') {
                activeTab.value = 'no-content';
            }
            fetchItems();

            return {
                search,
                activeTab,
                items,
                goTo,
                searchItems,
                followUser,
                fetchNextItems
            }
        }
    }
</script>

<style scoped>

</style>
